import { Project } from "utils/types";

export default ((): Project => ({
  id: "crave-catering",
  company: "oakslab",
  name: "Crave - Catering",
  desc:
    "Similar to <a href='https://play.google.com/store/apps/details?id=com.crave.consumerapp&hl=en&gl=US' target='_blank'><strong>Crave Delivery app</strong></a>, however it is designed specifically for businesses and events for bigger orders.",
  thumbnail: "/images/projects/crave-catering/thumb.png",
  logo: "/images/projects/crave-catering/logo.svg",
  role: "frontend",
  duration: "10 months",
  tech: [
    "reactjs",
    "react-hooks",
    "nextjs",
    "antd",
    "graphql",
    "apollo",
    "styled-components",
    "google-cloud",
    "firebase",
    "storybook",
    "typescript",
  ],
  previewText: "View Screenshots",
  teamSize:
    "1 frontend engineer, 2-3 backend engineers, 1 designer, 2 project managers, 1 QA",
  platforms: [
    {
      type: "web",
      link: "https://www.cravedelivery.com/catering",
    },
  ],
  preview: [
    {
      img: "/images/projects/crave-catering/1.jpg",
      caption: "Landing Page",
    },
    {
      img: "/images/projects/crave-catering/1.1.1.jpg",
      caption: "Landing Page - Need Help modal",
    },
    {
      img: "/images/projects/crave-catering/1.2.jpg",
      caption: "Registration Page",
    },
    {
      img: "/images/projects/crave-catering/1.3.jpg",
      caption: "Sign-in Page",
    },
    {
      img: "/images/projects/crave-catering/1.4.jpg",
      caption: "Forgot Password",
    },
    {
      img: "/images/projects/crave-catering/2.jpg",
      caption: "Within delivery zone verification",
    },
    {
      img: "/images/projects/crave-catering/3.jpg",
      caption: "Menu Page",
    },
    {
      img: "/images/projects/crave-catering/4.jpg",
      caption: "Menu Page - Item modal",
    },
    {
      img: "/images/projects/crave-catering/5.jpg",
      caption: "Menu Page - Date selection",
    },
    {
      img: "/images/projects/crave-catering/6.jpg",
      caption: "Checkout Page",
    },
    {
      img: "/images/projects/crave-catering/7.jpg",
      caption: "Checkout Page - Payment",
    },
    {
      img: "/images/projects/crave-catering/8.jpg",
      caption: "Checkout Page - Order Successful",
    },
    {
      img: "/images/projects/crave-catering/9.jpg",
      caption: "My Orders Page",
    },
    {
      img: "/images/projects/crave-catering/10.jpg",
      caption: "My Order Page",
    },
  ],
}))();
