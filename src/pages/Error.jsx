import styled from "styled-components";

import { useMoveHome } from "../hooks/useMoveHome";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  margin-top: 3rem;
  max-height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Box = styled.div`
  /* box */

  background-image: url("/paper.jpg");
  border: 5px solid var(--color-my-back);
  border-radius: var(--border-radius-md);
  color: var(--color-green-fix);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function Error() {
  const moveHome = useMoveHome();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">There was an error , please try again ... 😢</Heading>
        <Button onClick={moveHome} size="large">
          &larr; Home
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default Error;
