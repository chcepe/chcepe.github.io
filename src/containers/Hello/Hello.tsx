import { FC } from "react";
import Typewriter from "typewriter-effect";
import { useParallax } from "react-scroll-parallax";

import Text from "components/Text";

import * as Styled from "./styles";
import { SOCIAL_LINKS } from "./constants";
import Time from "./Time";

const Hello: FC = () => {
  const parallaxBG = useParallax<HTMLDivElement>({
    speed: -10,
    scale: [1.5, 3],
    opacity: [1, 0.3],
    shouldAlwaysCompleteAnimation: true,
    rotate: [0, 20],
  });

  const parallaxNotes = useParallax<HTMLDivElement>({
    speed: -20,
    scale: [1, 0.7],
  });

  const parallaxSocials = useParallax<HTMLDivElement>({
    opacity: [1, 0],
    shouldAlwaysCompleteAnimation: true,
    scaleY: [1, 0],
  });

  return (
    <Styled.Wrapper center="all">
      <Styled.BG ref={parallaxBG.ref} />

      <div ref={parallaxNotes.ref}>
        <Time />
        <Styled.NotesWrapper>
          <Styled.NotesHeader>
            <Styled.NotesNavs $color="#ec6a5e" />
            <Styled.NotesNavs $color="#f4be4f" />
            <Styled.NotesNavs $color="#61c653" />
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
                      "A software engineer currently based in Prague."
                    )
                    .start();
                }}
              />
            </Text>
          </Styled.NotesContent>
        </Styled.NotesWrapper>

        <Styled.SocialLinks ref={parallaxSocials.ref}>
          {SOCIAL_LINKS.map(({ id, icon, link, name }) => (
            <a href={link} title={name} target="_blank" key={id}>
              {icon}
            </a>
          ))}
        </Styled.SocialLinks>
      </div>
    </Styled.Wrapper>
  );
};

export default Hello;
