import { Company, Project } from "models";

export default ((): Project => ({
  id: "project-sophia",
  name: "Project Sophia",
  desc: "An AI-powered self-service checkout system - recognizes human faces and verifies the person once he smiles on the camera. Also, it provides relevant commercials based on face features.",
  thumbnail: "project-assets/project-sophia/bg.jpg",
  logo: "project-assets/project-sophia/logo.png",
  duration: "3 weeks",
  role: ["fullstack"],
  companyId: Company.MICROSOFT,
  tech: ["ai", "cognitive-services", "html5", "electron"],
  preview: [
    {
      yt: "rUYGcnfqWCY",
      caption: "A prototype made with Electron and HTML5",
    },
  ],
}))();
