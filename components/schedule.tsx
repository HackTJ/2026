"use client";

import { CalendarDays, Clock3, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  scheduleCategories,
  scheduleDays,
  scheduleStatus,
  type ScheduleCategory,
  type ScheduleDay,
  type ScheduleEvent,
} from "@/lib/schedule-data";
import { siteConfig } from "@/lib/site-config";

const HOUR_HEIGHT = 92;
const MIN_EVENT_HEIGHT = 64;

const categoryColors: Record<
  ScheduleCategory,
  { accent: string; surface: string }
> = {
  milestone: { accent: "var(--color-primary)", surface: "color-mix(in srgb, var(--color-primary) 14%, #0c1016)" },
  ceremony: { accent: "#f4c575", surface: "#342b27" },
  food: { accent: "#ffa992", surface: "#372927" },
  workshop: { accent: "#83c9e6", surface: "#203341" },
  community: { accent: "#c5a8f0", surface: "#302940" },
  judging: { accent: "#9cdbbc", surface: "#21362f" },
};

type PositionedEvent = {
  event: ScheduleEvent;
  top: number;
  height: number;
  bottom: number;
  lane: number;
  laneCount: number;
};

function minutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function formatTime(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  const normalizedHour = hour % 24;
  const displayHour = normalizedHour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${normalizedHour < 12 ? "AM" : "PM"}`;
}

function dateTime(day: ScheduleDay, time: string) {
  const offset =
    day.id === "sunday" && minutes(time) >= 180 ? "-04:00" : "-05:00";
  return `${day.date}T${time}:00${offset}`;
}

function displayMinute(day: ScheduleDay, time: string) {
  const value = minutes(time);
  return day.id === "sunday" && value >= 180 ? value - 60 : value;
}

function calendarStart(day: ScheduleDay) {
  return day.id === "saturday" ? 9 * 60 : 0;
}

function calendarHeight(day: ScheduleDay) {
  return (day.id === "saturday" ? 15.5 : 12.5) * HOUR_HEIGHT;
}

function positionEvents(day: ScheduleDay): PositionedEvent[] {
  const events = day.events
    .filter((event) => !event.daylightSavingNote)
    .map((event) => {
      const top =
        ((displayMinute(day, event.start) - calendarStart(day)) / 60) *
        HOUR_HEIGHT;
      const duration = event.end
        ? ((displayMinute(day, event.end) - displayMinute(day, event.start)) /
            60) *
          HOUR_HEIGHT
        : 0;
      const height = Math.max(duration, MIN_EVENT_HEIGHT);
      return {
        event,
        top,
        height,
        bottom: top + height,
        lane: 0,
        laneCount: 1,
      };
    })
    .sort((a, b) => a.top - b.top || b.bottom - a.bottom);

  const groups: PositionedEvent[][] = [];
  let group: PositionedEvent[] = [];
  let groupBottom = -1;

  for (const event of events) {
    if (group.length && event.top >= groupBottom) {
      groups.push(group);
      group = [];
      groupBottom = -1;
    }
    group.push(event);
    groupBottom = Math.max(groupBottom, event.bottom);
  }
  if (group.length) groups.push(group);

  for (const overlapping of groups) {
    const laneBottoms: number[] = [];
    for (const event of overlapping) {
      let lane = laneBottoms.findIndex((bottom) => bottom <= event.top);
      if (lane === -1) lane = laneBottoms.length;
      laneBottoms[lane] = event.bottom;
      event.lane = lane;
    }
    for (const event of overlapping) event.laneCount = laneBottoms.length;
  }

  return events;
}

function EventTime({ day, event }: { day: ScheduleDay; event: ScheduleEvent }) {
  return (
    <>
      <time dateTime={dateTime(day, event.start)}>
        {formatTime(event.start)}
      </time>
      {event.end && (
        <>
          {" – "}
          <time dateTime={dateTime(day, event.end)}>
            {formatTime(event.end)}
          </time>
        </>
      )}
    </>
  );
}

function CalendarGrid({
  day,
  onSelect,
}: {
  day: ScheduleDay;
  onSelect: (event: ScheduleEvent) => void;
}) {
  const startHour = day.id === "saturday" ? 9 : 0;
  const hours =
    day.id === "saturday"
      ? Array.from({ length: 16 }, (_, index) => startHour + index)
      : [0, 1, ...Array.from({ length: 11 }, (_, index) => index + 3)];
  const events = positionEvents(day);
  const daylightSavingEvent = day.events.find(
    (event) => event.daylightSavingNote,
  );

  return (
    <div className="hidden overflow-hidden border border-white/10 bg-[#0c1016] lg:block">
      <div className="relative" style={{ height: calendarHeight(day) }}>
        {hours.map((hour, index) => {
          const displayHour =
            day.id === "sunday" && hour >= 3 ? hour - 1 : hour;
          const top = (displayHour - startHour) * HOUR_HEIGHT;
          return (
            <div
              key={hour}
              className="absolute inset-x-0 flex items-start"
              style={{ top }}
            >
              <span
                className={`w-[76px] shrink-0 pr-4 text-right text-xs font-semibold text-white/45 ${index === 0 ? "translate-y-1" : "-translate-y-1/2"}`}
              >
                {formatTime(`${String(hour).padStart(2, "0")}:00`)}
              </span>
              <span className="min-w-0 flex-1 border-t border-white/[0.08]" />
            </div>
          );
        })}

        {daylightSavingEvent && (
          <button
            type="button"
            onClick={() => onSelect(daylightSavingEvent)}
            className="absolute left-[84px] right-5 z-20 flex items-center gap-2 border-l-2 border-[var(--color-primary)] bg-[#171c22] px-3 py-1 text-left text-xs font-semibold text-[var(--color-primary)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            style={{ top: HOUR_HEIGHT * 1.4 }}
          >
            <Clock3 aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>
              2:00 AM → 3:00 AM · Daylight Savings Shift — clocks move forward 1
              hour
            </span>
          </button>
        )}

        <div className="absolute bottom-0 left-[76px] right-5 top-0">
          {events.map(({ event, top, height, lane, laneCount }) => {
            const colors = categoryColors[event.category];
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => onSelect(event)}
                className="absolute flex flex-col items-start justify-start overflow-hidden rounded-sm border-l-[3px] px-3 py-2 text-left hover:brightness-110 focus-visible:z-30 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                style={{
                  top,
                  height,
                  left: `calc(${(lane / laneCount) * 100}% + 4px)`,
                  width: `calc(${100 / laneCount}% - 8px)`,
                  borderLeftColor: colors.accent,
                  backgroundColor: colors.surface,
                }}
              >
                <p
                  className="text-[11px] font-bold leading-tight"
                  style={{ color: colors.accent }}
                >
                  <EventTime day={day} event={event} />
                </p>
                <span className="mt-1 block text-sm font-bold leading-tight text-white">
                  {event.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileCalendar({
  day,
  onSelect,
}: {
  day: ScheduleDay;
  onSelect: (event: ScheduleEvent) => void;
}) {
  return (
    <ol className="border-t border-white/10 lg:hidden">
      {day.events.map((event) => {
        if (event.daylightSavingNote) {
          return (
            <li
              key={event.id}
              className="border-b border-white/10 py-4 text-[var(--color-primary)]"
            >
              <button
                type="button"
                onClick={() => onSelect(event)}
                className="w-full text-left focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              >
                <span className="flex items-center gap-2 text-xs font-bold">
                  <Clock3 aria-hidden="true" className="h-4 w-4" />
                  2:00 AM → 3:00 AM
                </span>
                <span className="mt-1 block font-bold">{event.title}</span>
                <span className="mt-1 block text-sm text-white/65">
                  Clocks move forward 1 hour.
                </span>
              </button>
            </li>
          );
        }

        const colors = categoryColors[event.category];
        return (
          <li key={event.id} className="border-b border-white/10 py-4">
            <button
              type="button"
              onClick={() => onSelect(event)}
              className="flex w-full items-start gap-3 text-left focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            >
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: colors.accent }}
              />
              <span>
                <span
                  className="block text-xs font-bold"
                  style={{ color: colors.accent }}
                >
                  <EventTime day={day} event={event} />
                </span>
                <span className="mt-1 block text-base font-bold text-white">
                  {event.title}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function ScheduleComingSoon() {
  return (
    <main className="pb-24 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="border-b border-white/10 pb-5 pt-10 text-center sm:pt-12">
          <h1 className="text-5xl font-extrabold sm:text-6xl">Schedule</h1>
          <p className="mt-3 text-base text-white/65">{siteConfig.event.dates}</p>
        </header>

        <section aria-labelledby="schedule-coming-soon" className="pt-10 sm:pt-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 border border-[var(--color-primary)] bg-[#171c22] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              Schedule in progress
            </span>
            <h2 id="schedule-coming-soon" className="mt-6 text-3xl font-extrabold sm:text-4xl">
              The weekend is taking shape.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/65">
              The schedule for HackTJ {siteConfig.iteration} is still in the works. Check back for the full schedule as the event gets closer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {scheduleDays.map((day) => (
              <div key={day.id} className="border border-white/10 bg-[#0c1016]">
                <div className="border-b border-white/10 bg-[#171c22] px-6 py-5 sm:px-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">{day.day}</p>
                  <h3 className="mt-1 text-2xl font-extrabold">{day.dateLabel}</h3>
                </div>
                <div className="flex min-h-48 flex-col justify-center px-6 py-8 sm:px-7">
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className="h-12 w-1 shrink-0 bg-[var(--color-primary)]" />
                    <div>
                      <p className="font-bold text-white">Details coming soon</p>
                      <p className="mt-1 text-sm text-white/55">Events and times will appear here once confirmed.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function PublishedSchedule() {
  const [selectedDayId, setSelectedDayId] =
    useState<ScheduleDay["id"]>("saturday");
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedDay = scheduleDays.find((day) => day.id === selectedDayId)!;
  const { event } = siteConfig;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedEvent && !dialog.open) dialog.showModal();
    if (!selectedEvent && dialog.open) dialog.close();
  }, [selectedEvent]);

  return (
    <main className="pb-24 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="border-b border-white/10 pb-5 pt-10 text-center sm:pt-12">
          <h1 className="text-5xl font-extrabold sm:text-6xl">Schedule</h1>
          <p className="mt-3 text-base text-white/65">{event.dates}</p>
        </header>

        <section aria-label="Event schedule" className="mt-2">
          <div className="flex justify-center">
            <div
              role="group"
              aria-label="Choose schedule day"
              className="flex border-b border-white/15"
            >
              {scheduleDays.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  aria-pressed={selectedDayId === day.id}
                  aria-controls="schedule-calendar-panel"
                  onClick={() => {
                    setSelectedEvent(null);
                    setSelectedDayId(day.id);
                  }}
                  className={`border-b-2 px-4 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                    selectedDayId === day.id
                      ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  {day.dateLabel}
                </button>
              ))}
            </div>
          </div>

          <ul
            aria-label="Event categories"
            className="my-6 flex flex-wrap justify-center gap-x-5 gap-y-2"
          >
            {scheduleCategories.map((category) => (
              <li
                key={category.id}
                className="inline-flex items-center gap-2 text-xs font-bold text-white/65"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: categoryColors[category.id].accent,
                  }}
                />
                {category.label}
              </li>
            ))}
          </ul>

          <div
            id="schedule-calendar-panel"
            className="border-t border-white/10 pt-6"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  {selectedDay.dateLabel}
                </p>
                <h3 aria-live="polite" className="text-2xl font-extrabold">
                  {selectedDay.title}
                </h3>
              </div>
              <span className="hidden text-xs font-semibold text-white/55 sm:inline-flex">
                {selectedDay.duration}
              </span>
            </div>
            <CalendarGrid day={selectedDay} onSelect={setSelectedEvent} />
            <MobileCalendar day={selectedDay} onSelect={setSelectedEvent} />
          </div>
        </section>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="schedule-event-title"
        onClose={() => setSelectedEvent(null)}
        className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md border border-white/15 bg-[#171c22] p-6 text-white shadow-2xl backdrop:bg-black/70 sm:p-8"
      >
        {selectedEvent && (
          <>
            <div className="flex items-start justify-between gap-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      categoryColors[selectedEvent.category].accent,
                  }}
                />
                {
                  scheduleCategories.find(
                    (category) => category.id === selectedEvent.category,
                  )?.label
                }
              </p>
              <button
                type="button"
                aria-label="Close event details"
                onClick={() => setSelectedEvent(null)}
                className="-mr-2 -mt-2 p-2 text-white/65 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <h2
              id="schedule-event-title"
              className="mt-4 text-3xl font-extrabold"
            >
              {selectedEvent.title}
            </h2>
            <dl className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm">
              <div>
                <dt className="font-semibold text-white/50">Date</dt>
                <dd className="mt-1 font-semibold">
                  {selectedDay.dateLabel}, {siteConfig.year}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white/50">Time</dt>
                <dd className="mt-1 font-semibold">
                  {selectedEvent.daylightSavingNote ? (
                    "2:00 AM → 3:00 AM"
                  ) : (
                    <EventTime day={selectedDay} event={selectedEvent} />
                  )}
                </dd>
              </div>
            </dl>
            {selectedEvent.daylightSavingNote && (
              <p className="mt-5 text-sm text-white/70">
                Clocks move forward one hour; the 2:00–3:00 AM hour is skipped.
              </p>
            )}
          </>
        )}
      </dialog>
    </main>
  );
}

export default function Schedule() {
  return scheduleStatus === "published" ? <PublishedSchedule /> : <ScheduleComingSoon />;
}
