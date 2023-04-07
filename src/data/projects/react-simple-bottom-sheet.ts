import { Project } from "models";

export default ((): Project => ({
  id: "react-simple-bottom-sheet",
  opensource: true,
  name: "react-simple-bottom-sheet",
  desc: "A simple bottom sheet component for your React apps - best for PWAs. Built with framer-motion.",
  thumbnail: "project-assets/react-simple-bottom-sheet/thumb.jpg",
  logo: "project-assets/react-simple-bottom-sheet/logo.png",
  tech: [
    "react",
    "framer-motion",
    "hooks",
    "npm",
    "pwa",
    "typescript",
    "styled-components",
  ],
  platforms: [
    {
      type: "github",
      link: "https://www.npmjs.com/package/react-simple-bottom-sheet",
    },
    {
      type: "web",
      link: "https://chcepe.github.io/react-simple-bottom-sheet/",
    },
  ],
}))();
