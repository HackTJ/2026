export type ScheduleCategory =
  | "milestone"
  | "ceremony"
  | "food"
  | "workshop"
  | "community"
  | "judging";

export type ScheduleEvent = {
  id: string;
  start: string;
  end?: string;
  title: string;
  category: ScheduleCategory;
  daylightSavingNote?: boolean;
};

export type ScheduleDay = {
  id: "saturday" | "sunday";
  day: string;
  date: string;
  dateLabel: string;
  title: string;
  duration: string;
  events: ScheduleEvent[];
};

export const scheduleCategories: { id: ScheduleCategory; label: string }[] = [
  { id: "milestone", label: "Milestone" },
  { id: "ceremony", label: "Ceremony" },
  { id: "food", label: "Food" },
  { id: "workshop", label: "Workshop" },
  { id: "community", label: "Community" },
  { id: "judging", label: "Judging" },
];

export const scheduleDays: ScheduleDay[] = [
  {
    id: "saturday",
    day: "Day 1",
    date: "2026-03-07",
    dateLabel: "Saturday · March 7",
    title: "Kickoff + Overnight Sprint",
    duration: "15 hours on-site",
    events: [
      {
        id: "check-in",
        start: "09:00",
        end: "11:00",
        title: "Student Check-In + Sponsorship fair",
        category: "milestone",
      },
      {
        id: "opening",
        start: "11:00",
        title: "Opening Ceremony & Doors Close",
        category: "ceremony",
      },
      {
        id: "hacking-begins",
        start: "11:30",
        title: "Hacking Begins",
        category: "milestone",
      },
      {
        id: "team-building",
        start: "11:30",
        end: "12:00",
        title: "Team Building",
        category: "community",
      },
      {
        id: "beginner-resources",
        start: "11:30",
        end: "12:00",
        title: "Resources & Q&A for Beginners",
        category: "community",
      },
      {
        id: "check-in-form",
        start: "13:00",
        title: "Check-In Form Due",
        category: "milestone",
      },
      {
        id: "lunch",
        start: "13:00",
        end: "14:00",
        title: "Lunch",
        category: "food",
      },
      {
        id: "workshops",
        start: "14:00",
        end: "18:00",
        title: "Workshops",
        category: "workshop",
      },
      {
        id: "workshops-end",
        start: "18:00",
        title: "Workshops End",
        category: "workshop",
      },
      {
        id: "sponsor-event",
        start: "18:00",
        end: "19:00",
        title: "VIP Sponsor Event",
        category: "community",
      },
      {
        id: "dinner",
        start: "19:00",
        end: "20:00",
        title: "Dinner",
        category: "food",
      },
      {
        id: "women-in-tech",
        start: "20:00",
        end: "21:00",
        title: "Women in Tech Panel",
        category: "community",
      },
      {
        id: "team-form",
        start: "23:30",
        title: "Team Name + Category Form Due",
        category: "milestone",
      },
    ],
  },
  {
    id: "sunday",
    day: "Day 2",
    date: "2026-03-08",
    dateLabel: "Sunday · March 8",
    title: "Ship Day!",
    duration: "12 hours on-site",
    events: [
      {
        id: "pizza",
        start: "00:00",
        title: "Pizza Served",
        category: "food",
      },
      {
        id: "daylight-saving",
        start: "02:00",
        title: "Daylight Savings Shift",
        category: "milestone",
        daylightSavingNote: true,
      },
      {
        id: "breakfast",
        start: "06:00",
        end: "07:30",
        title: "Breakfast",
        category: "food",
      },
      {
        id: "judges-meeting",
        start: "07:30",
        title: "Judges Meeting",
        category: "judging",
      },
      {
        id: "submission",
        start: "08:00",
        title: "Project Submission Deadline",
        category: "milestone",
      },
      {
        id: "hacking-ends",
        start: "08:00",
        title: "Hacking Ends · Prep for Judging",
        category: "milestone",
      },
      {
        id: "judging",
        start: "08:15",
        end: "11:30",
        title: "Judging",
        category: "judging",
      },
      {
        id: "results",
        start: "11:30",
        title: "Judging Ends & Results",
        category: "judging",
      },
      {
        id: "closing",
        start: "12:00",
        end: "12:30",
        title: "Closing Ceremony",
        category: "ceremony",
      },
    ],
  },
];
