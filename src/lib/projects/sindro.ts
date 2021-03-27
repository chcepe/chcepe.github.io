import { Project } from "utils/types";

export default ((): Project => ({
  id: "sindro",
  name: "Sindro Web",
  desc:
    "An online platform focused on simplicity and top of the line UX for fitness studios.",
  thumbnail: "/images/projects/sindro/thumb.jpg",
  logo: "/images/projects/sindro/logo.svg",
  role: "frontend",
  company: "oakslab",
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
      img: "/images/projects/sindro/1.png",
      caption: "Login Page",
    },
    {
      img: "/images/projects/sindro/2.png",
      caption: "Calendar View Page",
    },
    {
      img: "/images/projects/sindro/3.png",
      caption: "Clients Page",
    },
    {
      img: "/images/projects/sindro/4.png",
      caption: "Profile Page",
    },
    {
      img: "/images/projects/sindro/5.png",
      caption: "Activity Page",
    },
    {
      img: "/images/projects/sindro/6.png",
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
