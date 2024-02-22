import React from "react";
import { useNavigate } from "react-router-dom";

import ScrollableItems from "components/ScrollableItems/ScrollableItems";
import PROJECTS from "data/projects";
import Text from "components/Text";

import * as Styled from "./Projects.styled";
import LinkArrow from "components/LinkArrow";

const Projects = () => {
  const navigate = useNavigate();
  const [activeHover, setActiveHover] = React.useState<string>();

  return (
    <Styled.Wrapper
      container={{ content: false }}
      header={{
        title: "Projects",
        desc: "Some of the projects I've worked on.",
      }}
    >
      <ScrollableItems
        items={PROJECTS.map(({ id, name, thumbnail, logo }) => (
          <Styled.ProjectItem
            onClick={() => {
              navigate(`/projects/${id}`);
            }}
            key={id}
            disabled={Boolean(activeHover && activeHover !== id)}
            onMouseEnter={() => setActiveHover(id)}
            onMouseLeave={() => setActiveHover(undefined)}
          >
            <Styled.ProjectItemBG $bg={thumbnail} />
            <LinkArrow />
            <Styled.Content>
              <Styled.Logo $url={logo} />
              <Text maxWidth="50%" weight={700} color="white">
                {name}
              </Text>
            </Styled.Content>
          </Styled.ProjectItem>
        ))}
      />
    </Styled.Wrapper>
  );
};

export default Projects;
