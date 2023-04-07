import { Company, Project } from "models";

export default ((): Project => ({
  id: "lufthansa-ph-cmr",
  name: "Lufthansa PH CMR",
  desc: "CMR module for Lufthansa Philippines' Sharepoint Site",
  thumbnail: "project-assets/lufthansa-ph-cmr/bg.jpg",
  logo: "project-assets/lufthansa-ph-careers/logo.png",
  role: ["fullstack"],
  teamSize: "1 fullstack engineer, 1 teamlead",
  duration: "4 months",
  companyId: Company.LUFTHANSA,
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
      img: "project-assets/lufthansa-ph-cmr/bg.jpg",
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
