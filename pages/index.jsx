import styled from "styled-components";
import Introduction from "../sections/Introduction";
import { respondTo } from "../utils/styledUtils";

export default () => {
  return (
    <Container>
      <Introduction />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 48px;
  margin-bottom: 55px;

  ${respondTo("mdUp")} {
    margin-bottom: 55px;
  }
`;
