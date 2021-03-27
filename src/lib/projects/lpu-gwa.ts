import { Project } from "utils/types";

export default ((): Project => ({
  id: "gwa-calculator",
  name: "GWA Calculator",
  desc: "A web app to calculate GWA for LPU-Laguna students",
  thumbnail: "/images/projects/gwa-calculator/bg.jpg",
  logo: "/images/projects/lpu/logo.png",
  role: "fullstack",
  tech: ["php", "jquery", "html5", "jquery"],
  duration: "1 day",
  company: "lpu",
  preview: [
    {
      img: "/images/projects/gwa-calculator/bg.jpg",
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
