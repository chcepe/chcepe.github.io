import { Project } from "utils/types";

export default ((): Project => ({
  id: "chcepe",
  opensource: true,
  name: "chcepe.github.io",
  desc: "Here is where you can find some of my projects.",
  thumbnail: "/images/projects/chcepe/thumb.png",
  logo: "/images/projects/chcepe/logo.png",
  tech: ["react", "hooks", "typescript", "styled-components"],
  platforms: [
    {
      type: "github",
      link: "https://github.com/chcepe/chcepe.github.io",
    },
    {
      type: "web",
      link: "https://chcepe.github.io/",
    },
  ],
}))();
