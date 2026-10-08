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

export const scheduleStatus: "coming_soon" | "published" = "coming_soon";

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
    date: "2027-03-06",
    dateLabel: "Saturday · March 6",
    title: "Saturday schedule",
    duration: "Times to be announced",
    events: [],
  },
  {
    id: "sunday",
    day: "Day 2",
    date: "2027-03-07",
    dateLabel: "Sunday · March 7",
    title: "Sunday schedule",
    duration: "Times to be announced",
    events: [],
  },
];
