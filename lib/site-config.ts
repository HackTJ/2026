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
    status: "open" as RegistrationStatus,
    opensAt: "2026-01-26T11:59:00-05:00",
    links: {
      participants:
        "https://docs.google.com/forms/d/e/1FAIpQLScs55nEb53Lx4SCE1-LfeO8Tz061UEWihGcVCaPTGiTFbb0uA/viewform?usp=header",
      mentors:
        "https://docs.google.com/forms/d/e/1FAIpQLScZ9WMaB97UOzTgafRNP81-wdzYBJSqrxa8eZ7vrpNx3XwzGQ/viewform?usp=dialog",
      volunteers:
        "https://www.signupgenius.com/go/70A0F49A8AD22AAF58-61776825-hacktj#/",  
    },
  },
};
