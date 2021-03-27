import { Project } from "utils/types";

export default ((): Project => ({
  id: "lufthansa-ph-cmr",
  name: "Lufthansa PH CMR",
  desc: "CMR module for Lufthansa Philippines' Sharepoint Site",
  thumbnail: "/images/projects/lufthansa-ph-cmr/bg.jpg",
  logo: "/images/projects/lufthansa-ph-careers/logo.png",
  role: "fullstack",
  teamSize: "1 fullstack engineer, 1 teamlead",
  duration: "4 months",
  company: "lufthansa",
  tech: [
    "php",
    "asp.net",
    "mvc-framework",
    "html5",
    "sql",
    "jquery",
    "bootstrap",
  ],
  preview: [
    {
      img: "/images/projects/lufthansa-ph-cmr/bg.jpg",
      caption: "Initial Page",
    },
  ],
  platforms: [
    {
      type: "web",
      link: "http://cmr.ltpsystems.com/",
    },
  ],
}))();
