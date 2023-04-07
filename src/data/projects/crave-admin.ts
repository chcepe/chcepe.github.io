import { Company, Project } from "models";

export default ((): Project => ({
  id: "crave-admin",
  companyId: Company.OAKS_LAB,
  name: "Crave - Admin Portal",
  desc: "Serves several kitchens operating within the Crave Facility for them to be able to oversee and manage the end-to-end order and delivery process.",
  thumbnail: "project-assets/crave-admin/thumb.png",
  logo: "project-assets/crave-admin/logo.svg",
  role: ["frontend"],
  duration: "6 months",
  tech: [
    "reactjs",
    "react-hooks",
    "nextjs",
    "antd",
    "graphql",
    "apollo",
    "styled-components",
    "google-cloud",
    "storybook",
    "firebase",
    "typescript",
  ],
  previewText: "View Screenshots",
  teamSize:
    "1-3 frontend engineers, 2-3 backend engineers, 1 designer, 2 project managers, 1 QA",
  platforms: [
    {
      type: "web",
      link: "https://www.cravedelivery.com/",
    },
    {
      type: "ios",
      link: "https://apps.apple.com/us/app/crave-delivery/id1505759548",
    },
    {
      type: "android",
      link: "https://play.google.com/store/apps/details?id=com.crave.consumerapp",
    },
  ],
  preview: [
    {
      img: "project-assets/crave-admin/1.jpg",
      caption: "Login Page",
    },
    {
      img: "project-assets/crave-admin/2.jpg",
      caption: "Order Monitoring Page",
    },
    {
      img: "project-assets/crave-admin/3.jpg",
      caption: "Time of the Day Categories Page",
    },
    {
      img: "project-assets/crave-admin/4.jpg",
      caption: "Restaurants Page",
    },
    {
      img: "project-assets/crave-admin/4.1.jpg",
      caption: "Restaurants Page - Crave Menu",
    },
    {
      img: "project-assets/crave-admin/4.2.jpg",
      caption: "Restaurants Page - Menu Edit",
    },
    {
      img: "project-assets/crave-admin/4.3.jpg",
      caption: "Menu List Page",
    },
    {
      img: "project-assets/crave-admin/5.jpg",
      caption: "Customers Page",
    },
    {
      img: "project-assets/crave-admin/5.1.jpg",
      caption: "Customer Profile Page",
    },
    {
      img: "project-assets/crave-admin/5.2.jpg",
      caption: "Customer Profile Page - Orders",
    },
    {
      img: "project-assets/crave-admin/5.3.jpg",
      caption: "Customer Profile Page - Addresses ",
    },
    {
      img: "project-assets/crave-admin/6.jpg",
      caption: "Reports Page",
    },
    {
      img: "project-assets/crave-admin/6.1.jpg",
      caption: "Reports Page - Concept Sales",
    },
    {
      img: "project-assets/crave-admin/6.2.jpg",
      caption: "Reports Page - Promos",
    },
    {
      img: "project-assets/crave-admin/7.0.jpg",
      caption: "Promos Page",
    },
    {
      img: "project-assets/crave-admin/7.jpg",
      caption: "Promos Page",
    },
    {
      img: "project-assets/crave-admin/7.1.jpg",
      caption: "Promos Page - Add Promo",
    },
    {
      img: "project-assets/crave-admin/8.jpg",
      caption: "Login to KDS Page",
    },
  ],
}))();
