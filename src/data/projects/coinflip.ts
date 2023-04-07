import { Company, Project } from "models";

export default ((): Project => ({
  id: "coinflip",
  companyId: Company.OAKS_LAB,
  name: "CoinFlip",
  desc: "CoinFlip is a cloud-based payment platform that enables electronic benefits and points to be applied as payments.",
  thumbnail: "project-assets/coinflip/thumb.jpg",
  logo: "project-assets/coinflip/logo.png",
  role: ["frontend"],
  tech: [
    "reactjs",
    "react-hooks",
    "nextjs",
    "antd",
    "graphql",
    "apollo",
    "styled-components",
    "typescript",
  ],
  previewText: "View Screenshots",
  teamSize: "2 frontend engineers, 1 designer, 1 project manager, 1 QA",
  duration: "6 months",
  platforms: [
    {
      type: "web",
      link: "https://www.coinflip.network/",
    },
  ],
  preview: [
    {
      img: "project-assets/coinflip/1.png",
      caption: "Login Page",
    },
    {
      img: "project-assets/coinflip/2.png",
      caption: "Sign-up Page",
    },
    {
      img: "project-assets/coinflip/3.png",
      caption: "Landing Page",
    },
    {
      img: "project-assets/coinflip/4.png",
      caption: "Landing Page #2",
    },
    {
      img: "project-assets/coinflip/5.png",
      caption: "Groceries Page",
    },
    {
      img: "project-assets/coinflip/6.png",
      caption: "Groceries Page #2",
    },
    {
      img: "project-assets/coinflip/7.png",
      caption: "Offers Page",
    },
    {
      img: "project-assets/coinflip/8.png",
      caption: "Card Linking Page",
    },
    {
      img: "project-assets/coinflip/9.png",
      caption: "Profile Page",
    },
    {
      img: "project-assets/coinflip/10.png",
      caption: "Wallet Page",
    },
  ],
}))();
