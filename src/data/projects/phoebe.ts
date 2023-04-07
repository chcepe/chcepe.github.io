import { Company, Project } from "models";

export default ((): Project => ({
  id: "phoebe",
  name: "Phoebe - Bot",
  desc: "A chatbot in a SPA react-app made for Accenture AI Training Team",
  thumbnail: "project-assets/phoebe/bg.jpg",
  logo: "project-assets/phoebe/logo.png",
  role: ["fullstack"],
  companyId: Company.ACCENTURE,
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
      img: "project-assets/phoebe/1.gif",
      caption: "",
    },
    {
      img: "project-assets/phoebe/2.gif",
      caption: "",
    },
    {
      img: "project-assets/phoebe/3.gif",
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
