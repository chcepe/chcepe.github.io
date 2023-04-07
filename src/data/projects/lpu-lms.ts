import { Company, Project } from "models";

export default ((): Project => ({
  id: "lms-lpu-laguna",
  name: "LMS for LPU-Laguna",
  desc: "An Integrated Library Management System for LPU-Laguna",
  thumbnail: "project-assets/lms-lpu-laguna/bg.jpg",
  logo: "project-assets/lpu/logo.png",
  role: ["fullstack", "ui-ux-designer"],
  tech: ["java"],
  duration: "1-2 weeks",
  companyId: Company.LPU,
  preview: [
    {
      yt: "P9LSNpW-xmY",
      caption: "Demo",
    },
    {
      img: "project-assets/lms-lpu-laguna/3.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/3.1.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/4.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/5.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/7.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/8.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/9.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/10.jpg",
      caption: "",
    },
    {
      img: "project-assets/lms-lpu-laguna/11.jpg",
      caption: "",
    },
  ],
}))();
