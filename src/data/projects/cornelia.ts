import { Company, Project } from "models";

export default ((): Project => ({
  id: "cornelia",
  name: "Cornelia",
  desc: "A platform for building chatbots without coding",
  thumbnail: "project-assets/cornelia/thumb.jpg",
  logo: "project-assets/cornelia/logo.png",
  role: ["team-lead", "fullstack"],
  companyId: Company.TECH_ONE_GLOBAL,
  teamSize: "1 fullstack engineer, 1 team lead",
  duration: "8-9 months",
  tech: [
    "express",
    "reactjs",
    "redux",
    "semantic-ui",
    "cognitive-services",
    "ai",
    "nlp",
    "azure-storage",
    "microsoft-bot-framework",
  ],
  preview: [
    {
      yt: "1_0d2O59Fy0",
      caption: "Demo with the platform and bot emulator",
    },
  ],
}))();
