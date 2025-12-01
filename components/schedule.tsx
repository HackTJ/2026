type DaySchedule = {
  day: string;
  date: string;
  events: { time: string; title: string }[];
};

const scheduleDays: DaySchedule[] = [
  {
    day: "Day 1",
    date: "Saturday · March 8",
    events: [
      { time: "9:00 AM", title: "Doors Open" },
      { time: "10:00 AM", title: "Sponsor Fair" },
      { time: "11:00 AM", title: "Opening Ceremony" },
      { time: "12:00 PM", title: "Hacking Begins" },
      { time: "2:00 PM", title: "Workshops & Mentors" },
      { time: "6:00 PM", title: "Dinner" },
      { time: "12:00 AM", title: "Midnight Snack" },
    ],
  },
  {
    day: "Day 2",
    date: "Sunday · March 9",
    events: [
      { time: "8:00 AM", title: "Breakfast" },
      { time: "11:00 AM", title: "Hacking Ends" },
      { time: "12:30 PM", title: "Judging & Expo" },
      { time: "2:00 PM", title: "Awards & Closing" },
    ],
  },
];

export default function Schedule() {
  return (
    <section className="relative overflow-hidden bg-[#0f141a] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/15 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/15 to-transparent opacity-70" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">Schedule</h1>
          <p className="mt-3 text-lg text-white/80">
            Cruise along two lanes of HackTJ happenings, from doors open to awards.
          </p>
        </div>

        <div className="space-y-16">
          {scheduleDays.map((day, idx) => (
            <RoadLane key={day.day} lane={day} offset={idx * 30} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadLane({ lane, offset }: { lane: DaySchedule; offset: number }) {
  return (
    <div className="relative pb-6" style={{ paddingTop: offset ? `${offset}px` : undefined }}>
      <div className="relative mx-auto w-full min-w-[720px] rounded-[48px] border border-white/10 bg-[#111821] px-6 py-12 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          <span>{lane.day}</span>
          <span>{lane.date}</span>
        </div>
        <div className="absolute inset-x-10 top-1/2 -translate-y-1/2">
          <div className="h-2 rounded-full bg-[#0b0f13]" />
          <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 border-t-4 border-dashed border-white/60" />
        </div>
        <div className="relative mt-16">
          <div className="road-scrollbar overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-4">
              {lane.events.map((event, index) => (
                <EventStop key={event.title} event={event} showConnector={index < lane.events.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventStop({ event, showConnector }: { event: { time: string; title: string }; showConnector: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl border border-white/10 bg-[#161f28] px-4 py-3 text-left shadow">
        <p className="text-sm font-semibold text-white/70">{event.time}</p>
        <h3 className="text-lg font-bold text-white">{event.title}</h3>
      </div>
      {showConnector && <div className="h-1 w-10 flex-shrink-0 rounded-full bg-white/30" />}
    </div>
  );
}
