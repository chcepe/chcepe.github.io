import { Project } from "utils/types";

export default ((): Project => ({
  id: "coinflip",
  company: "oakslab",
  name: "CoinFlip",
  desc:
    "CoinFlip is a cloud-based payment platform that enables electronic benefits and points to be applied as payments.",
  thumbnail: "/images/projects/coinflip/thumb.jpg",
  logo: "/images/projects/coinflip/logo.png",
  role: "frontend",
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
      img: "/images/projects/coinflip/1.png",
      caption: "Login Page",
    },
    {
      img: "/images/projects/coinflip/2.png",
      caption: "Sign-up Page",
    },
    {
      img: "/images/projects/coinflip/3.png",
      caption: "Landing Page",
    },
    {
      img: "/images/projects/coinflip/4.png",
      caption: "Landing Page #2",
    },
    {
      img: "/images/projects/coinflip/5.png",
      caption: "Groceries Page",
    },
    {
      img: "/images/projects/coinflip/6.png",
      caption: "Groceries Page #2",
    },
    {
      img: "/images/projects/coinflip/7.png",
      caption: "Offers Page",
    },
    {
      img: "/images/projects/coinflip/8.png",
      caption: "Card Linking Page",
    },
    {
      img: "/images/projects/coinflip/9.png",
      caption: "Profile Page",
    },
    {
      img: "/images/projects/coinflip/10.png",
      caption: "Wallet Page",
    },
  ],
}))();
