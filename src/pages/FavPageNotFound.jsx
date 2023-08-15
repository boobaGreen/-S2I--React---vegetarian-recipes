import styled from "styled-components";

import { useMoveHome } from "../hooks/useMoveHome";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const FavPageNotFound = styled.main`
  margin: auto;
  width: 80%;
  border: solid 0.1rem var(--color-my-back);
  background-image: url("/paper.jpg");
  display: flex;
  align-items: start;
  border-radius: var(--border-radius-md);
  justify-content: center;
`;

const Box = styled.div`
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  width: 100%;
  text-align: center;
  border: solid 0.5rem var(--color-my-back);

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function FavNotFound() {
  const moveHome = useMoveHome();

  return (
    <FavPageNotFound>
      <Box>
        <Heading as="h2">Your favorites list is empty...</Heading>
        <Heading as="h2">❤️ to add!</Heading>
        <Button onClick={moveHome} style={{ marginTop: "3rem" }}>
          &larr; Start !
        </Button>
      </Box>
    </FavPageNotFound>
  );
}

export default FavNotFound;
