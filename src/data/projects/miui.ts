import { Project } from "models";

export default ((): Project => ({
  id: "miui8-idea",
  name: "MIUI 8 Idea",
  desc: "An idea for Xiaomi's MIUI Version 8",
  thumbnail: "project-assets/miui8/bg.jpg",
  logo: "project-assets/miui8/logo.png",
  tech: ["after-fx"],
  role: ["motion-designer"],
  duration: "1-5 days",
  preview: [
    {
      yt: "N0NHofHZNAQ",
      caption: "A prototype made with After Effects",
    },
  ],
}))();
