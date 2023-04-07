import { Company, Project } from "models";

export default ((): Project => ({
  id: "lifebrand",
  name: "Lifebrand",
  desc: "Utilized machine learning platform, that scans social media for inappropriate or controversial material, and removes it. ",
  thumbnail: "project-assets/lifebrand/thumb.jpg",
  logo: "project-assets/lifebrand/logo.svg",
  companyId: Company.OAKS_LAB,
  teamSize: "2 fullstack engineers, 1 ML engineer, 1 project manager, 1 QA",
  duration: "2-3 months",
  role: ["fullstack"],
  tech: [
    "reactjs",
    "react-hooks",
    "nextjs",
    "antd",
    "graphql",
    "apollo",
    "tensorflow",
    "typescript",
  ],
  preview: [
    {
      img: "project-assets/lifebrand/1.png",
      caption: "Login Page",
    },
    {
      img: "project-assets/lifebrand/2.png",
      caption: "Subscription Page",
    },
    {
      img: "project-assets/lifebrand/3.png",
      caption: "Profile Page",
    },
    {
      img: "project-assets/lifebrand/4.png",
      caption: "Purchase Page",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "https://www.lifebrand.life/",
    },
  ],
}))();
