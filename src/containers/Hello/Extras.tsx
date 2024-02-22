import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

import { color, margin } from "theme";
import Text from "components/Text";
import { ACTIVITIES, getActivity } from "./utils";

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

  const activity = getActivity(dateState);
  const ActivityIcon = ACTIVITIES[activity].icon;

  return (
    <Wrapper>
      <a href="https://en.wikipedia.org/wiki/Prague" target="_blank">
        <InfoWrapper>
          <AiOutlineClockCircle />
          <Text color="white">
            My local time is{" "}
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Text>
        </InfoWrapper>
      </a>

      {/* Activity */}

      <InfoWrapper>
        <ActivityIcon />
        <Text color="white">{ACTIVITIES[activity].text}</Text>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Time;
