import { Project } from "models";

export default ((): Project => ({
  id: "minerva-plus",
  name: "Minerva+",
  desc: "A prototype of an AI-powered app that aims to help job seekers improve their interview skills by monitoring their body gestures while doing a mock-up job interview through their smartphone",
  thumbnail: "project-assets/minerva-plus/bg.jpg",
  logo: "project-assets/minerva-plus/logo.png",
  role: ["ui-ux-designer"],
  tech: ["html5", "ai"],
  preview: [
    {
      yt: "LKYMv1Lfq6c",
      caption: "A prototype made with HTML5",
    },
  ],
}))();
