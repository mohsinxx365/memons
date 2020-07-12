import styled from "styled-components";
import Introduction from "../sections/Introduction";

export default () => {
  return (
    <Container>
      <Introduction />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 48px;
`;
