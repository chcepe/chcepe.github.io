import { Company, Project } from "models";

export default ((): Project => ({
  id: "lpu-app",
  name: "LPU - Laguna app",
  desc: 'A website of <a href="https://lpulaguna.edu.ph" target="_blank">lpulaguna.edu.ph</a> converted into a native app',
  thumbnail: "project-assets/lpu/thumb.jpg",
  logo: "project-assets/lpu/logo.png",
  role: ["fullstack"],
  tech: ["android-java", "php", "mysql"],
  companyId: Company.LPU,
  teamSize: "1 fullstack engineer",
  duration: "6 months",
  preview: [
    {
      img: "project-assets/lpu/lpu (1).jpg",
      caption: "Splash Screen",
    },
    {
      img: "project-assets/lpu/lpu (2).jpg",
      caption: "Main Screen",
    },
    {
      img: "project-assets/lpu/lpu (3).jpg",
      caption: "About LPU-Laguna Screen",
    },
    {
      img: "project-assets/lpu/lpu (4).jpg",
      caption: "Academics Navigation Screen",
    },
    {
      img: "project-assets/lpu/lpu (5).jpg",
      caption: "Sample (CAM) of Academic Screen",
    },
    {
      img: "project-assets/lpu/lpu (6).jpg",
      caption: "Campus Life Screen",
    },
    {
      img: "project-assets/lpu/lpu (7).jpg",
      caption: "Campus Life Screen",
    },
    {
      img: "project-assets/lpu/lpu (8).jpg",
      caption: "Admission Screen",
    },
    {
      img: "project-assets/lpu/lpu (9).jpg",
      caption: "Follow Us Screen",
    },
  ],
  platforms: [
    {
      type: "android",
      link: "https://play.google.com/store/apps/details?id=com.lpulaguna&hl=en_US",
    },
  ],
}))();
