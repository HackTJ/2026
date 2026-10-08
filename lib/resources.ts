import { siteConfig } from "@/lib/site-config";

export type ResourceType = "pdf" | "image";

export type ResourceAsset = {
  slug: string;
  title: string;
  description: string;
  assetPath: string;
  type: ResourceType;
};

export const resources: ResourceAsset[] = [
  {
    slug: "sponsorship-packet",
    title: `HackTJ ${siteConfig.iteration} Sponsorship Packet`,
    description:
      `Everything partners need to know about HackTJ ${siteConfig.iteration} sponsorship levels and perks.`,
    assetPath: "/sponsorship14.pdf",
    type: "pdf",
  },
  {
    slug: "logo",
    title: `HackTJ ${siteConfig.iteration} Logo`,
    description: "The official HackTJ logo for this year's event.",
    assetPath: "/brand/hacktj-14.png",
    type: "image",
  },
];

export const resourceMap = new Map(resources.map((resource) => [resource.slug, resource]));
