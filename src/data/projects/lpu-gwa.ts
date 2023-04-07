import { Company, Project } from "models";

export default ((): Project => ({
  id: "gwa-calculator",
  name: "GWA Calculator",
  desc: "A web app to calculate GWA for LPU-Laguna students",
  thumbnail: "project-assets/gwa-calculator/bg.jpg",
  logo: "project-assets/lpu/logo.png",
  role: ["fullstack"],
  tech: ["php", "jquery", "html5", "jquery"],
  duration: "1 day",
  companyId: Company.LPU,
  preview: [
    {
      img: "project-assets/gwa-calculator/bg.jpg",
      caption: "Splash Screen",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "http://chcepe.com/gwa",
    },
  ],
}))();
