import React from "react";
import styled from "styled-components";
import { TiLocation } from "react-icons/ti";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import { color, margin } from "theme";
import Text from "components/Text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  margin-bottom: ${margin.lg};
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  svg {
    fill: ${color.white};
    width: 22px;
    height: 22px;
  }
`;

const Time = () => {
  const [dateState, setDateState] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <Wrapper>
      {/* Location */}
      <a href="https://en.wikipedia.org/wiki/Prague" target="_blank">
        <InfoWrapper>
          <TiLocation />
          <Text weight="bold" color="white">
            Prague, CZ
          </Text>
        </InfoWrapper>
      </a>

      {/* Calendar */}
      <InfoWrapper>
        <AiOutlineCalendar />
        <Text marginR="md">
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Text>

        <AiOutlineClockCircle />
        <Text>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Text>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Time;
