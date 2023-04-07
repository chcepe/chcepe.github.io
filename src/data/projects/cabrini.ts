import { Company, Project } from "models";

export default ((): Project => ({
  id: "st-cabrini",
  name: "St. Cabrini Portal UI",
  desc: "A UI design for the portal of St. Cabrini Hospital",
  thumbnail: "project-assets/cabrini/1.jpg",
  logo: "project-assets/cabrini/logo.png",
  role: ["ui-ux-designer"],
  tech: ["photoshop"],
  duration: "1-4 days",
  companyId: Company.CABRINI,
  preview: [
    {
      img: "project-assets/cabrini/1.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/2.0.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/2.1.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/3.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/4.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/5.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/6.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/7.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/8.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/8.1.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/9.jpg",
      caption: "",
    },
    {
      img: "project-assets/cabrini/10.jpg",
      caption: "",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "http://www.cabrinimed.com/",
    },
  ],
}))();
