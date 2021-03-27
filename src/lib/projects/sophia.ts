import { Project } from "utils/types";

export default ((): Project => ({
  id: "project-sophia",
  name: "Project Sophia",
  desc:
    "An AI-powered self-service checkout system - recognizes human faces and verifies the person once he smiles on the camera. Also, it provides relevant commercials based on face features.",
  thumbnail: "/images/projects/project-sophia/bg.jpg",
  logo: "/images/projects/project-sophia/logo.png",
  duration: "3 weeks",
  role: "fullstack",
  company: "microsoft",
  tech: ["ai", "cognitive-services", "html5", "electron"],
  preview: [
    {
      yt: "rUYGcnfqWCY",
      caption: "A prototype made with Electron and HTML5",
    },
  ],
}))();
