import { Project } from "utils/types";

export default ((): Project => ({
  id: "lifebrand",
  name: "Lifebrand",
  desc:
    "Utilized machine learning platform, that scans social media for inappropriate or controversial material, and removes it. ",
  thumbnail: "/images/projects/lifebrand/thumb.jpg",
  logo: "/images/projects/lifebrand/logo.svg",
  company: "oakslab",
  teamSize: "2 fullstack engineers, 1 ML engineer, 1 project manager, 1 QA",
  duration: "2-3 months",
  role: "fullstack",
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
      img: "/images/projects/lifebrand/1.png",
      caption: "Login Page",
    },
    {
      img: "/images/projects/lifebrand/2.png",
      caption: "Subscription Page",
    },
    {
      img: "/images/projects/lifebrand/3.png",
      caption: "Profile Page",
    },
    {
      img: "/images/projects/lifebrand/4.png",
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
