import React from "react";
import Typewriter from "typewriter-effect";
import { useParallax } from "react-scroll-parallax";
import { AiFillApple } from "react-icons/ai";

import Flexbox from "components/Flexbox";
import Text from "components/Text";

import * as Styled from "./styles";
import { SOCIAL_LINKS } from "./constants";
import Extras from "./Extras";

const Hello: React.FC = () => {
  const parallaxBG = useParallax<HTMLDivElement>({
    speed: -10,
    scale: [1.3, 3],
    opacity: [1, 0.3],
    shouldAlwaysCompleteAnimation: true,
  });

  const parallaxNotes = useParallax<HTMLDivElement>({
    speed: -20,
    scale: [1, 0.7],
  });

  const parallaxSocials = useParallax<HTMLDivElement>({
    opacity: [1, 0],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <Styled.Wrapper center="all">
      {/* Background */}
      <Styled.BG ref={parallaxBG.ref} />

      {/* Apple-inspired notes */}
      <div ref={parallaxNotes.ref}>
        {/* Location & time */}
        <Extras />

        {/* Notes content */}
        <Styled.NotesWrapper>
          <Styled.NotesHeader>
            {["#ec6a5e", "#f4be4f", "#61c653"].map((hexColor) => (
              <Styled.NotesNavs key={hexColor} $color={hexColor} />
            ))}
          </Styled.NotesHeader>
          <Styled.NotesContent>
            <Text className="intro" size="md" weight={300} block>
              Hello, I'm
            </Text>
            <Text className="name" size="xl" weight={900} block>
              Christian Cepe
            </Text>
            <Text className="desc" block>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "I create awesome experiences with React and Typescript."
                    )
                    .start();
                }}
              />
            </Text>
          </Styled.NotesContent>
        </Styled.NotesWrapper>

        {/* Dock inspired / Social Links */}
        <div ref={parallaxSocials.ref}>
          <Styled.SocialLinks>
            {SOCIAL_LINKS.map(({ id, icon, link, name }) => (
              <a href={link} title={name} target="_blank" key={id}>
                {icon}
              </a>
            ))}
          </Styled.SocialLinks>

          {/* Inspiration */}
          <Flexbox flexGap="4px" alignItems="center" justifyContent="center">
            <AiFillApple color="#fff" size={22} />
            <Text color="white">
              Inspired by <strong>MacOS Ventura</strong>
            </Text>
          </Flexbox>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default Hello;
