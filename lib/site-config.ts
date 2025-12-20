export type RegistrationStatus = "open" | "not_open_yet" | "closed";

export const siteConfig = {
  year: 2026,
  iteration: "13.0",
  theme: {
    primary: "#fcb2c3",
    secondary: "#4c3a26",
  },
  event: {
    season: "Spring",
    dates: "March 7-8, 2026",
    venue: "Cvent HQ",
    city: "Tysons, VA",
  },
  registration: {
    status: "not_open_yet" as RegistrationStatus,
    link: "https://hacktj.org/register",
  },
};
