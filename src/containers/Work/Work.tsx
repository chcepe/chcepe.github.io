import React from "react";

import WorkExperience from "components/WorkExperience";
import Section from "components/Section";

import { WORK_EXPERIENCES } from "./contants";

const Work: React.FC = () => (
  <Section
    header={{
      title: "Work Experience",
      desc: "5+ years of working in engineering.",
    }}
  >
    {WORK_EXPERIENCES.map((props, i) => (
      <WorkExperience key={"work" + i} {...props} />
    ))}
  </Section>
);

export default Work;
