import {
  ClipboardCheck,
  Coffee,
  DoorOpen,
  Flag,
  FlaskConical,
  Handshake,
  MoonStar,
  Rocket,
  Sparkles,
  Trophy,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";

type ScheduleEvent = {
  time: string;
  endTime?: string;
  title: string;
  icon: LucideIcon;
};

type DaySchedule = {
  day: string;
  date: string;
  tagline: string;
  description: string;
  duration: string;
  accent: {
    base: string;
    glow: string;
  };
  events: ScheduleEvent[];
};

const scheduleDays: DaySchedule[] = [
  {
    day: "Day 1",
    date: "Saturday · March 7",
    tagline: "Kickoff + Overnight Sprint",
    description:
      "",
    duration: "15 hours on-site",
    accent: { base: "#fcb2c3", glow: "#ffd9e5" },
    events: [
      {
        time: "9:00 AM",
        endTime: "11:00 AM",
        title: "Student Check-In + Sponsorship fair",
        icon: DoorOpen,
      },
      {
        time: "11:00 AM",
        title: "Opening Ceremony & Doors Close",
        icon: Sparkles,
      },
      {
        time: "11:30 AM",
        title: "Hacking Begins",
        icon: Rocket,
      },
      {
        time: "11:30 AM",
        endTime: "12:00 PM",
        title: "Team Building",
        icon: Handshake,
      },
      {
        time: "11:30 AM",
        endTime: "12:00 PM",
        title: "Resources & Q&A for Beginners",
        icon: FlaskConical,
      },
      {
        time: "1:00 PM",
        title: "Check-In Form Due",
        icon: ClipboardCheck,
      },
      {
        time: "1:00 PM",
        endTime: "2:00 PM",
        title: "Lunch",
        icon: UtensilsCrossed,
      },
      {
        time: "2:00 PM",
        endTime: "6:00 PM",
        title: "Workshops",
        icon: FlaskConical,
      },
      {
        time: "6:00 PM",
        title: "Workshops End",
        icon: Flag,
      },
      {
        time: "6:00 PM",
        endTime: "7:00 PM",
        title: "VIP Sponsor Event",
        icon: Handshake,
      },
      {
        time: "7:00 PM",
        endTime: "8:00 PM",
        title: "Dinner",
        icon: UtensilsCrossed,
      },
      {
        time: "8:00 PM",
        endTime: "9:00 PM",
        title: "Women in Tech Panel",
        icon: Sparkles,
      },
      {
        time: "11:30 PM",
        title: "Team Name + Category Form Due",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    day: "Day 2",
    date: "Sunday · March 8",
    tagline: "Ship Day!",
    description:
      "",
    duration: "12 hours on-site",
    accent: { base: "#fcb2c3", glow: "#ffd9e5" },
    events: [
      {
        time: "12:00 AM",
        title: "Pizza Served",
        icon: UtensilsCrossed,
      },
      {
        time: "2:00 AM",
        title: "Daylight Savings Shift",
        icon: MoonStar,
      },
      {
        time: "6:00 AM",
        endTime: "7:30 AM",
        title: "Breakfast",
        icon: Coffee,
      },
      {
        time: "7:30 AM",
        title: "Judges Meeting",
        icon: ClipboardCheck,
      },
      {
        time: "8:00 AM",
        title: "Project Submission Deadline",
        icon: Flag,
      },
      {
        time: "8:00 AM",
        title: "Hacking Ends · Prep for Judging",
        icon: Rocket,
      },
      {
        time: "8:15 AM",
        endTime: "11:30 AM",
        title: "Judging",
        icon: ClipboardCheck,
      },
      {
        time: "11:30 AM",
        title: "Judging Ends & Results",
        icon: Sparkles,
      },
      {
        time: "12:00 PM",
        endTime: "12:30 PM",
        title: "Closing Ceremony",
        icon: Trophy,
      },
    ],
  },
];

export default function Schedule() {
  const { event } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-[#05070a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,178,195,0.3),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,217,229,0.2),_transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/60">Itinerary</p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Weekend schedule
            </h2>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/40">
              <span>{event.dates}</span>
              <span>&#8226;</span>
              <span>{event.venue}</span>
              <span>&#8226;</span>
              <span>{event.city}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {scheduleDays.map((day) => (
            <article
              key={day.day}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1016]/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${day.accent.glow}33, transparent 60%)`,
                }}
              />
              <div className="relative">
                <header className="flex flex-col gap-4 border-b border-white/5 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.5em]"
                      style={{ color: day.accent.base }}
                    >
                      {day.day} · {day.date}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold sm:text-4xl">{day.tagline}</h3>
                    <p className="mt-2 text-sm text-white/70">{day.description}</p>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em]"
                    style={{ color: day.accent.base, borderColor: `${day.accent.base}55` }}
                  >
                    {day.duration}
                  </div>
                </header>

                <ol className="relative mt-10 space-y-8">
                  <span className="pointer-events-none absolute left-6 top-0 h-full w-px bg-white/15" aria-hidden="true" />
                  {day.events.map((event) => {
                    const timeLabel = event.endTime ? `${event.time} — ${event.endTime}` : event.time;
                    return (
                      <li key={`${day.day}-${event.title}`} className="relative pl-16">
                        <span
                          className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
                          style={{ borderColor: `${day.accent.base}55`, color: day.accent.base }}
                        >
                          <event.icon className="h-5 w-5" />
                        </span>
                        <div className="flex flex-col gap-3">
                          <time className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                            {timeLabel}
                          </time>
                          <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
                            <h4 className="text-lg font-semibold">{event.title}</h4>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
