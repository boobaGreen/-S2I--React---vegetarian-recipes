import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const FavPageNotFound = styled.main`
  background-color: var(--color-grey-50);
  display: flex;
  align-items: start;
  justify-content: center;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: var(--color-brand-500);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function FavNotFound() {
  const moveBack = useMoveBack();

  return (
    <FavPageNotFound>
      <Box>
        <Heading as="h2">Your favorites list is empty...</Heading>
        <Heading as="h2">❤️ to add!</Heading>
        <Button onClick={moveBack} size="medium" style={{ marginTop: "3rem" }}>
          &larr; Start !
        </Button>
      </Box>
    </FavPageNotFound>
  );
}

export default FavNotFound;
