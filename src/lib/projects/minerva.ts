import { Project } from "utils/types";

export default ((): Project => ({
  id: "minerva",
  name: "Minerva",
  desc: "An integrated mobile app designed for the visually impaired",
  thumbnail: "/images/projects/minerva/thumb.jpg",
  logo: "/images/projects/minerva/logo.png",
  role: ["founder", "fullstack", "ui-ux-designer"],
  award:
    "Imagine Cup Philippines 2017 Winner, Imagine Cup Southeast Asia 2nd runner up, Imagine Cup World Finals 8th place",
  tech: [
    "react-native",
    "redux",
    "expo-client",
    "cognitive-services",
    "ai",
    "azure",
    "node",
    "cosmos-db",
  ],
  teamSize: "1 fullstack engineer, 1 UX designer, 1 marketing specialist",
  preview: [
    {
      img: "/images/projects/minerva/thumb.jpg",
      caption: "Cover photo for Play Store",
    },
    {
      img: "/images/projects/minerva/brochure.jpg",
      caption: "Brochure",
    },
    {
      yt: "5CgcdIsPvNs",
      caption: "Promotional Video",
    },
    {
      yt: "8GG7e-9bgL8",
      caption: "Interview with Umagang Kay Ganda (National TV Show)",
    },
  ],
  platforms: [
    {
      type: "web",
      link:
        "https://web.archive.org/web/20171025034145/http://minerva-eye.com/",
    },
    {
      type: "android",
      link:
        "https://play.google.com/store/apps/details?id=com.chcepe.minerva&hl=en",
    },
  ],
}))();
