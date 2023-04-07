export interface Blog {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

export type Role =
  | "founder"
  | "frontend"
  | "fullstack"
  | "team-lead"
  | "ui-ux-designer"
  | "motion-designer";

interface Preview {
  img?: string;
  caption?: string;
  yt?: string;
}

interface Platform {
  type: PlatformType;
  link: string;
}

export type PlatformType = "web" | "android" | "ios" | "github";

export enum Company {
  OMIO,
  OAKS_LAB,
  TECH_ONE_GLOBAL,
  MICROSOFT,
  LPU,
  ACCENTURE,
  CABRINI,
  MAGEZI,
  LUFTHANSA,
}

export const COMPANY_NAME: Record<Company, string> = {
  [Company.OMIO]: "Omio",
  [Company.OAKS_LAB]: "OAK'S LAB",
  [Company.TECH_ONE_GLOBAL]: "Tech One Global",
  [Company.MICROSOFT]: "Microsoft",
  [Company.LPU]: "LPU",
  [Company.ACCENTURE]: "Accenture",
  [Company.CABRINI]: "Cabrini",
  [Company.MAGEZI]: "Magezi",
  [Company.LUFTHANSA]: "Lufthansa",
};

export interface Project {
  id: string;
  name: string;
  desc: string;
  thumbnail: string;
  logo: string;
  role?: Role[];
  tech?: string[];
  preview?: Preview[];
  previewText?: string;
  platforms?: Platform[];
  companyId?: Company;
  teamSize?: string;
  duration?: string;
  award?: string;
  opensource?: boolean;
}
