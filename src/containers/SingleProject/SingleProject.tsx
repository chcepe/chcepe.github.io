import { FC, useContext } from "react";
import { createGlobalStyle } from "styled-components";

import Header from "components/Header";
import Layout from "components/Layout";
import Text from "components/Text";
import { AppContext } from "lib/AppContext";
import { theme } from "theme";
import { Project } from "utils/types";

import ProjectInfo from "./ProjectInfo";
import * as S from "./styles";

const GlobalStyle = createGlobalStyle<{
  darkMode?: boolean;
  thumbnail: string;
}>(
  ({ darkMode, thumbnail }) => `
      body {
        background-image: ${
          darkMode
            ? theme.darkMode.singleProject.gradient
            : theme.lightMode.singleProject.gradient
        },
          url("${thumbnail}");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }   
  `
);

const Projects: FC<Project> = (project) => {
  const { darkMode } = useContext(AppContext);

  const { id, name, desc, tech, thumbnail, logo, preview } = project;

  return (
    <Layout title={`${name}`} header={<Header />}>
      <GlobalStyle darkMode={darkMode} thumbnail={thumbnail} />
      <S.Content darkMode={darkMode}>
        <S.Logo src={logo} />
        <Text size="h3" weight="bold" block marginB="lg">
          {name}
        </Text>
        <Text block marginB="lg">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </Text>
        {tech && (
          <S.Techonologies>
            {tech.sort().map((tech, i) => (
              <S.Tag key={`tech-${tech}-${i}`}>{tech}</S.Tag>
            ))}
          </S.Techonologies>
        )}
        <ProjectInfo project={project} />

        {preview && (
          <S.Preview>
            {preview.map(({ img, caption, yt }, i) => (
              <div key={`preview-${i}-${id}`}>
                {yt && (
                  <iframe
                    title="preview"
                    src={`https://www.youtube.com/embed/${yt}?frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture`}
                  />
                )}
                {img && <img alt={caption} loading="lazy" src={img} />}
                {caption && (
                  <Text block size="sm" marginB="xl">
                    {caption}
                  </Text>
                )}
              </div>
            ))}
          </S.Preview>
        )}
      </S.Content>
      {/* <S.Suggestions>
        <Text marginB="xl">Checkout some other projects:</Text>
        <ProjectList type="random" />
      </S.Suggestions> */}
    </Layout>
  );
};

export default Projects;
