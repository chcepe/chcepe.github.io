import React from "react";

import WorkExperience from "components/WorkExperience";
import Section from "components/Section";

import projects from "data/projects";
import { WORK_EXPERIENCES } from "./contants";

const Work: React.FC = () => (
  <Section
    header={{
      title: "Work Experience",
      desc: "5+ years of working in engineering.",
    }}
  >
    {WORK_EXPERIENCES.map((workExperience, i) => {
      const workProjects = projects.filter(
        (p) => p.companyId === workExperience.company.id
      );

      return (
        <WorkExperience
          key={"work" + i}
          projects={workProjects}
          {...workExperience}
        />
      );
    })}
  </Section>
);

export default Work;
