import { AppType, LOGO } from "./customEnums";

export interface Projects {
  type: AppType;
  title: string;
  description: string;
  lienDemo: string;
  lienGit: string;
  logo: LOGO;
  stack: string[];
}
