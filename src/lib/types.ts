export interface Project {
  readonly index: string;
  readonly name: string;
  readonly description: string;
  readonly href?: string;
}

export interface HackathonEntry {
  readonly name: string;
  readonly progression: readonly string[];
  readonly result: string;
}

export interface DetailItem {
  readonly label: string;
  readonly values: readonly string[];
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

export interface SiteContent {
  readonly identity: {
    readonly name: string;
    readonly role: string;
    readonly company: string;
    readonly location: string;
    readonly headline: string;
  };
  readonly summary: readonly string[];
  readonly projects: readonly Project[];
  readonly hackathon: HackathonEntry;
  readonly details: readonly DetailItem[];
  readonly contact: {
    readonly heading: string;
    readonly links: readonly ContactLink[];
    readonly copyright: string;
  };
}
