import { Project } from "utils/types";

export default ((): Project => ({
  id: "lufthansa-ph-careers",
  name: "Lufthansa PH Careers",
  desc: "Careers website for Lufthansa Philippines",
  thumbnail: "/images/projects/lufthansa-ph-careers/bg.jpg",
  logo: "/images/projects/lufthansa-ph-careers/logo.png",
  role: "fullstack",
  duration: "7 months",
  teamSize: "2 fullstack engineers, 1 team lead",
  company: "lufthansa",
  tech: ["asp.net", "mvc-framework", "html5", "sql", "jquery", "bootstrap"],
  preview: [
    {
      img: "/images/projects/lufthansa-ph-careers/bg.jpg",
      caption: "Login Screen",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "http://careers.ltpsystems.com/Home/Login",
    },
  ],
}))();
