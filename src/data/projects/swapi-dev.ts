import { Project } from "models";

export default ((): Project => ({
  id: "swapi-graphql-nextjs",
  opensource: true,
  name: "swapi-graphql-nextjs",
  desc: "A portal created based from <a href='https://github.com/graphql/swapi-graphql' target='_blank'>swapi-graphql</a>.",
  thumbnail: "project-assets/swapi-dev/thumb.jpg",
  logo: "project-assets/swapi-dev/logo.png",
  tech: ["react", "hooks", "graphql", "typescript", "styled-components"],
  platforms: [
    {
      type: "github",
      link: "https://github.com/chcepe/swapi-graphql-nextjs",
    },
    {
      type: "web",
      link: "https://swapi-chcepe.vercel.app/",
    },
  ],
}))();
