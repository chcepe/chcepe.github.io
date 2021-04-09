import { FC } from "react";

import Text from "components/Text";
import Link from "components/Link";
import { SOCIAL_LINKS } from "./constants";
import * as S from "./styles";

const Hello: FC = () => (
  <S.Wrapper>
    <S.Avatar />
    <Text weight="bold" size="h1" block>
      Ahoj, I'm Chris 👋
    </Text>
    <S.CVBtn href="/chcepe-cv.pdf" target="_blank">
      Download CV
    </S.CVBtn>
    <Text lineHeight="30px" block>
      I'm a software engineer from the{" "}
      <Link href="https://en.wikipedia.org/wiki/Philippines" target="_blank">
        Philippines
      </Link>
      , currently based in{" "}
      <Link href="https://en.wikipedia.org/wiki/Prague" target="_blank">
        Prague
      </Link>
      . I started coding with HTML and CSS when I was 12 and had my first job as
      a PHP developer when I was about 15. Back in 2016, I joined Microsoft as
      an{" "}
      <Link href="https://studentambassadors.microsoft.com/" target="_blank">
        MSP
      </Link>
      ; together with my team, we competed and won in{" "}
      <Link
        href="https://news.microsoft.com/en-ph/2017/05/04/imaginecupregionalfinals/"
        target="_blank"
      >
        Imagine Cup PH
      </Link>{" "}
      and also in{" "}
      <Link
        href="https://www.youtube.com/watch?v=-QGLMV46ug8&ab_channel=MicrosoftAsia"
        target="_blank"
      >
        Southeast Asia Finals
      </Link>
      . Later, we represented our country in the{" "}
      <Link
        href="https://www.geekwire.com/2017/microsoft-ceo-satya-nadella-student-innovators-youve-won-lottery-spend-wisely/"
        target="_blank"
      >
        world finals
      </Link>{" "}
      and won{" "}
      <Link
        href="https://www.rappler.com/technology/features/opticode-minerva-microsoft-imagine-cup-2017"
        target="_blank"
      >
        8th place over 50+ teams around the world
      </Link>
      . Since then, I started my professional career.
      <br />
      <br />
      Now, I am working{" "}
      <Link href="https://oakslab.com" target="_blank">
        @oakslab
      </Link>
      , helping them build products from scratch for startups. In my free time,
      I enjoy working on side projects to practice my skills outside of work.
      When I’m not coding, I find myself going for outdoor activities,{" "}
      <Link href="https://instagram.com/nuxcape" target="_blank">
        traveling
      </Link>
      , attending meetups, and doing some{" "}
      <Link href="https://www.youtube.com/c/chcepe/videos" target="_blank">
        video editing
      </Link>
      .
    </Text>
    <S.SocialLinks>
      {SOCIAL_LINKS.map(({ id, icon, link, name }) => (
        <Link href={link} title={name} target="_blank" key={id}>
          {icon}
        </Link>
      ))}
    </S.SocialLinks>
  </S.Wrapper>
);

export default Hello;
