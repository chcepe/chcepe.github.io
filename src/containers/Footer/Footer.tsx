import Text from "components/Text";
import * as Styled from "./Footer.styled";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Signature />
      <Text align="center" color="grey100">
        &copy; {new Date().getFullYear()} <strong>Christian Cepe</strong>
      </Text>
    </Styled.Wrapper>
  );
};

export default Footer;
