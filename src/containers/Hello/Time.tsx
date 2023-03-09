import React from "react";
import styled from "styled-components";

import { color, margin } from "theme";
import Text from "components/Text";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiTwotoneCalendar,
} from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${color.white};
  margin-bottom: ${margin.lg};
`;

const Time = () => {
  const [dateState, setDateState] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setDateState(new Date()), 800);
  }, []);

  return (
    <Wrapper>
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
          second: "numeric",
          hour12: true,
        })}
      </Text>
    </Wrapper>
  );
};

export default Time;
