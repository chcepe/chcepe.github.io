import { Company, Project } from "models";

export default ((): Project => ({
  id: "sindro",
  name: "Sindro Web",
  desc: "An online platform focused on simplicity and top of the line UX for fitness studios.",
  thumbnail: "project-assets/sindro/thumb.jpg",
  logo: "project-assets/sindro/logo.svg",
  role: ["frontend"],
  companyId: Company.OAKS_LAB,
  teamSize:
    "1 frontend engineer, 1 fullstack engineer, 1 backend engineer, 1 project manager, 1 designer",
  duration: "2 months",
  tech: [
    "reactjs",
    "react-hooks",
    "nextjs",
    "antd",
    "graphql",
    "apollo",
    "styled-components",
    "typescript",
  ],
  preview: [
    {
      img: "project-assets/sindro/1.png",
      caption: "Login Page",
    },
    {
      img: "project-assets/sindro/2.png",
      caption: "Calendar View Page",
    },
    {
      img: "project-assets/sindro/3.png",
      caption: "Clients Page",
    },
    {
      img: "project-assets/sindro/4.png",
      caption: "Profile Page",
    },
    {
      img: "project-assets/sindro/5.png",
      caption: "Activity Page",
    },
    {
      img: "project-assets/sindro/6.png",
      caption: "Groups Page",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "https://sindro.io/",
    },
  ],
}))();
