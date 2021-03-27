import { Project } from "utils/types";

export default ((): Project => ({
  id: "phoebe",
  name: "Phoebe - Bot",
  desc: "A chatbot in a SPA react-app made for Accenture AI Training Team",
  thumbnail: "/images/projects/phoebe/bg.jpg",
  logo: "/images/projects/phoebe/logo.png",
  role: "fullstack",
  company: "accentureph",
  teamSize: "1 fullstack engineer, 1 team lead",
  duration: "2-3 months",
  tech: [
    "express",
    "reactjs",
    "nextjs",
    "semantic-ui",
    "cosmos-db",
    "mongo-db",
    "microsoft-bot-framework",
  ],
  preview: [
    {
      img: "/images/projects/phoebe/1.gif",
      caption: "",
    },
    {
      img: "/images/projects/phoebe/2.gif",
      caption: "",
    },
    {
      img: "/images/projects/phoebe/3.gif",
      caption: "",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "https://chcepe.github.io/acn-phoebe-static/",
    },
  ],
}))();
