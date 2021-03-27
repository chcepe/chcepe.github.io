import { ImOffice, ImTrophy } from "react-icons/im";
import { BsPeopleFill, BsFillGearFill } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";

import { Company, Project, Role } from "utils/types";

import { Table } from "./types";

const RoleLabel: { [key in Role]: string } = {
  frontend: "Frontend Engineer",
  fullstack: "Fullstack Engineer",
  "team-lead": "Team Lead",
  founder: "Founder",
  "ui-ux-designer": "UX/UX Designer",
  "motion-designer": "Motion Designer",
};

const CompanyLabel: { [key in Company]: string } = {
  microsoft: "Microsoft Philippines",
  techoneglobal: "Tech One Global Philippines",
  oakslab: "OAK'S LAB s.r.o.",
  lpu: "Lyceum of the Philippines University - Laguna",
  accentureph: "Accenture Philippines",
  cabrini: "St. Cabrini Medical Hospital",
  magezi: "Magezi Trainings and Education Services",
  lufthansa: "Lufthansa Technik Philippines",
};

export const generateTableInfo = (project: Project) => {
  const { role, company, teamSize, duration, award } = project;
  let info: Table[] = [];

  if (role)
    info = [
      ...info,
      {
        id: "role",
        label: <BsFillGearFill />,
        value:
          typeof role === "string"
            ? RoleLabel[role]
            : role.map((r) => RoleLabel[r]).join(", "),
      },
    ];
  if (company)
    info = [
      ...info,
      {
        id: "company",
        label: <ImOffice />,
        value: CompanyLabel[company],
      },
    ];
  if (teamSize)
    info = [
      ...info,
      {
        id: "teamSize",
        label: <BsPeopleFill />,
        value: teamSize,
      },
    ];
  if (duration)
    info = [
      ...info,
      {
        id: "duration",
        label: <RiTimer2Fill />,
        value: duration,
      },
    ];
  if (award)
    info = [
      ...info,
      {
        id: "award",
        label: <ImTrophy />,
        value: award,
      },
    ];
  return info;
};
