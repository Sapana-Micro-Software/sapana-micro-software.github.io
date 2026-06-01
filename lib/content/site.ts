import type { DeveloperListing, Leadership, ProductHighlight } from "./types";

export const siteMeta = {
  title: "Sapana Micro Software",
  description:
    "Sapana Micro Software — production apps on Apple platforms and research engineering hubs.",
  canonicalUrl: "https://sapana-micro-software.github.io",
} as const;

export const leadership: Leadership = {
  chiefEngineer: {
    name: "Shyamal Chandra",
    role: "Chief Engineer (Manager)",
    profileUrl: "https://shyamalschandra.github.io/",
  },
};

export const appStoreDeveloper: DeveloperListing = {
  title: "Sapana Micro Software on the App Store",
  description:
    "Production apps for iPhone, iPad, Mac, Apple Watch, and more — crafted with attention to reliability and polish.",
  href: "https://apps.apple.com/us/developer/sapana-micro-software/id1704558752",
};

/** Featured titles mirror the public developer listing; URLs resolve via the developer page. */
export const productHighlights: ProductHighlight[] = [
  {
    title: "Rosary-Track-I",
    tagline: "A rosary app unlike any other.",
  },
  {
    title: "SMS-Water-Track-I",
    tagline: "A customizable gardening timer.",
  },
  {
    title: "Prayer-Track",
    tagline: "A customizable rosary app for Mac.",
  },
  {
    title: "Paper Highlighter",
    tagline:
      "Turn any PDF into a narrated broadcast with synchronized neon highlighting.",
    kind: "web",
    href: "https://sapana-micro-software.github.io/paper-highlighter/",
  },
];
