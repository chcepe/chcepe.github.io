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
export type Role =
  | "founder"
  | "frontend"
  | "fullstack"
  | "team-lead"
  | "ui-ux-designer"
  | "motion-designer";
export type Company =
  | "oakslab"
  | "techoneglobal"
  | "microsoft"
  | "lpu"
  | "accentureph"
  | "cabrini"
  | "magezi"
  | "lufthansa";

export interface Project {
  id: string;
  name: string;
  desc: string;
  thumbnail: string;
  logo: string;
  role?: Role | Role[];
  tech?: string[];
  preview?: Preview[];
  previewText?: string;
  platforms?: Platform[];
  company?: Company;
  teamSize?: string;
  duration?: string;
  award?: string;
  opensource?: boolean;
}

export interface Blog {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}
