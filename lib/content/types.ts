export type HubKind = "research" | "product" | "repository";

export interface HubLink {
  title: string;
  description: string;
  href: string;
  kind: HubKind;
  tags?: string[];
}

export interface Leadership {
  chiefEngineer: {
    name: string;
    role: string;
    profileUrl: string;
    portraitUrl: string;
    portraitAlt: string;
  };
}

export interface SiteAssets {
  logoUrl: string;
  logoAlt: string;
}

export interface DeveloperListing {
  title: string;
  description: string;
  href: string;
}

export type ProductHighlight =
  | {
      title: string;
      tagline: string;
      kind?: "app-store";
    }
  | {
      title: string;
      tagline: string;
      kind: "web";
      href: string;
    }
  | {
      title: string;
      tagline: string;
      kind: "repository";
      href: string;
    };
