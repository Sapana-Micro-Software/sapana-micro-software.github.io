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
  };
}

export interface DeveloperListing {
  title: string;
  description: string;
  href: string;
}

export interface ProductHighlight {
  title: string;
  tagline: string;
}
