import React from "react";
import { useParallax } from "react-scroll-parallax";

import Text from "components/Text";
import * as Styled from "./styles";

const AboutMe: React.FC = () => {
  const parallaxRocket = useParallax<HTMLImageElement>({
    speed: -20,
    translateX: [0, 500],
    translateY: [0, -300],
    scale: [1, 1.2],
  });

  return (
    <Styled.Wrapper header={{ title: "About me" }}>
      <Styled.Avatar />

      <Styled.RocketContainer>
        <Styled.Rocket ref={parallaxRocket.ref} />
      </Styled.RocketContainer>

      <Text marginB={16} lineHeight="28px" block>
        My name is Chris and I love building things for the web.
        <br />
        <br />
        My interest in software engineering began in 2012 when I decided to
        experiment with creating Facebook Landing Pages aka FBML - turns out
        it's an excellent way to learn HTML and CSS!
        <br />
        <br />
        Fast-forward to today, I have gained experience from various projects
        and helped other companies in building their products. Currently, I work
        at a travel platform company, helping them build products for their
        partners.
        <br />
        <br />
        In my free time, I enjoy working on side projects to practice my skills
        outside of work. When I'm not coding, I find myself going for outdoor
        activities, cooking, travelling, attending meetups, doing some video
        editing, or most of the time playing with my dog.
      </Text>
    </Styled.Wrapper>
  );
};

export default AboutMe;
