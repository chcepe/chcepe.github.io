import { Company, Project } from "models";

export default ((): Project => ({
  id: "magezi",
  name: "Magezi",
  desc: 'An SPA wordpress made for a startup "Magezi Trainings and Educational Services"',
  thumbnail: "project-assets/magezi/bg.jpg",
  logo: "project-assets/magezi/logo.png",
  role: ["fullstack", "ui-ux-designer"],
  tech: ["php", "jquery", "bootstrap", "wordpress", "mysql"],
  duration: "13 months",
  companyId: Company.MAGEZI,
  preview: [
    {
      img: "project-assets/magezi/1.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/2.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/3.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/4.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/5.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/6.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/7.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/8.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/9.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/10.jpg",
      caption: "",
    },
    {
      img: "project-assets/magezi/11.jpg",
      caption: "",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "https://web.archive.org/web/20170918093249/http://magezi.com.ph/",
    },
  ],
}))();
