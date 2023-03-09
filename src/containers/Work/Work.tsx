import { FC } from "react";

import WorkExperience from "components/WorkExperience";

import * as Styled from "./styles";
import { WORK_EXPERIENCES } from "./contants";

const Work: FC = () => (
  <Styled.Wrapper
    header={{
      title: "Work Experience",
      desc: "5+ years of working in engineering.",
    }}
  >
    {WORK_EXPERIENCES.map((props, i) => (
      <WorkExperience key={"work" + i} {...props} />
    ))}
  </Styled.Wrapper>
);

export default Work;
