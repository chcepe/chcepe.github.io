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
      I'm from the{" "}
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
      ; together with my{" "}
      <Link
        href="https://news.microsoft.com/en-ph/2017/05/04/imaginecupregionalfinals/"
        target="_blank"
      >
        team
      </Link>
      , we competed in Microsoft HQ for{" "}
      <Link
        href="https://www.rappler.com/technology/features/opticode-minerva-microsoft-imagine-cup-2017"
        target="_blank"
      >
        Imagine Cup
      </Link>{" "}
      and won the 8th place over 50+ teams around the world. Since then, I
      started my professional career.
      <br />
      <br />
      Now, I am working{" "}
      <Link href="https://oakslab.com" target="_blank">
        @oakslab
      </Link>
      , helping them build products from scratch for startups. In my free time,
      I enjoy working on side projects to practice my skills outside of work.
      When I’m not coding, I find myself going for outdoor activities,
      traveling, attending meetups, and doing some video editing.
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
