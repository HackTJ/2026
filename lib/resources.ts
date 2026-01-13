export type ResourceType = "pdf" | "image";

export type ResourceAsset = {
  slug: string;
  title: string;
  description: string;
  assetPath: string;
  type: ResourceType;
  previewImage?: string;
};

export const resources: ResourceAsset[] = [
  {
    slug: "sponsorship-packet",
    title: "HackTJ 13.0 Sponsorship Packet",
    description:
      "Everything partners need to know about HackTJ 13.0 sponsorship levels and perks.",
    assetPath: "/sponsorship13_0.pdf",
    type: "pdf",
    previewImage: "/pink_black.png",
  },
  {
    slug: "brand-mark",
    title: "HackTJ 13.0 Brand Mark",
    description: "The circular HackTJ 13.0 mark for press kits, features, and promotions.",
    assetPath: "/pink_white.png",
    type: "image",
    previewImage: "/pink_white.png",
  },
];

export const resourceMap = new Map(resources.map((resource) => [resource.slug, resource]));
