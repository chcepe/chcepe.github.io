import { FC } from "react";

import Text from "components/Text";
import * as S from "./styles";

const AboutMe: FC = () => (
  <S.Wrapper header={{ title: "About me" }}>
    <S.Avatar />
    <Text marginB={16} lineHeight="28px" block>
      My name is Chris and I love building things for the web.
      <br />
      <br />
      My interest in software engineering began in 2012 when I decided to
      experiment with creating Facebook Landing Pages aka FBML - turns out it's
      an excellent way to learn HTML and CSS!
      <br />
      <br />
      Fast-forward to today, I have gained experience from various projects and
      helped other companies in building their products. Currently, I work at a
      travel platform company, helping them build products for their partners.
      <br />
      <br />
      In my free time, I enjoy working on side projects to practice my skills
      outside of work. When I'm not coding, I find myself going for outdoor
      activities, cooking, travelling, attending meetups, doing some video
      editing, or most of the time playing with my dog.
    </Text>
  </S.Wrapper>
);

export default AboutMe;
