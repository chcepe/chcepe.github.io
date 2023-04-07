import React from "react";

import Text from "components/Text";

import * as Styled from "./WorkExperience.styled";
import { COMPANY_NAME, Company, Project } from "models";

type Technology =
  | "Javascript"
  | "Typescript"
  | "React"
  | "NextJS"
  | "GraphQL"
  | "Apollo"
  | "styled-components"
  | "Cypress"
  | "Go"
  | "Ant Design"
  | "Figma"
  | "InVision"
  | "Python"
  | "React"
  | "TensorFlow"
  | "scikit-learn"
  | "bot-framework"
  | "Microsoft Azure"
  | "Language Understanding (LUIS)"
  | "OpenCV"
  | "Azure Logic Apps"
  | "Cognitive Services"
  | "Microsoft 365"
  | "Webflow";

export interface Props {
  title: string;
  duration: string;
  technologies: Technology[];
  company: {
    id: Company;
    logo: string;
  };
  desc?: React.ReactNode;
  achievements?: React.ReactNode[];
}

const WorkExperience: React.FC<Props & { projects: Project[] }> = ({
  title,
  duration,
  company,
  technologies,
  achievements,
  desc,
  projects,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Styled.Wrapper expanded={expanded}>
      {/* Clickable work summary */}
      <Styled.Main onClick={() => setExpanded((prev) => !prev)}>
        <Styled.Logo $src={company.logo} />
        <Styled.Info>
          <Styled.Title>
            <Text weight={600}>
              {title} @ {COMPANY_NAME[company.id]}
            </Text>
            <Text color="grey100" size="xs">
              {duration}
            </Text>
          </Styled.Title>

          <Styled.TechItems>
            <Text size="xs" marginT="md" color="grey90">
              {technologies.sort().join(" · ")}
            </Text>
          </Styled.TechItems>
        </Styled.Info>
      </Styled.Main>

      {expanded && (
        <>
          {/* Description */}
          <Text size="xs" marginT="lg">
            {desc}
          </Text>

          {/* Achievements */}
          <ul>
            {achievements?.map((a, i) => (
              <li key={title + i}>
                <Text display="inline" size="xs">
                  {a}
                </Text>
              </li>
            ))}
          </ul>

          {/* Projects */}
          <Styled.Projects>
            {projects.map(({ id, companyId, name }) => (
              <Text size="xs" key={`${companyId}-${id}`}>
                {name}
              </Text>
            ))}
          </Styled.Projects>
        </>
      )}
    </Styled.Wrapper>
  );
};

export default WorkExperience;
