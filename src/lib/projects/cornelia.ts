import { Project } from "utils/types";

export default ((): Project => ({
  id: "cornelia",
  name: "Cornelia",
  desc: "A platform for building chatbots without coding",
  thumbnail: "/images/projects/cornelia/thumb.jpg",
  logo: "/images/projects/cornelia/logo.png",
  role: ["team-lead", "fullstack"],
  company: "techoneglobal",
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
