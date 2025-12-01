export type RegistrationStatus = "open" | "not_open_yet" | "closed";

export const siteConfig = {
  registration: {
    status: "not_open_yet" as RegistrationStatus,
    link: "https://hacktj.org/register",
  },
};
