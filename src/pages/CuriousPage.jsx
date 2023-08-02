import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useState } from "react";
import Row from "../ui/Row";
import { useCurious } from "../feautures/recipes/useCurious";

import Spinner from "../ui/Spinner";
import Error from "./Error";
const StyledCuriousPage = styled.main`
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
function CuriousPage() {
  const moveBack = useMoveBack();
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  // const [more, setMore] = useState(false);
  const [timeStampKey, setTimeStampKey] = useState(timestamp);

  // const uid = useRef(timestamp);
  const { isLoading, curious, error } = useCurious(timeStampKey);

  function handleClick() {
    setTimeStampKey(timestamp);
    console.log("timestamp :", timestamp);
  }

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    // <div>
    //   <p>JOKE !</p>
    //   {/* <p>{timestamp}</p> */}
    //   <p>{joke.text}</p>
    //   <button onClick={handleClick}>MORE</button>
    // </div>
    <StyledCuriousPage>
      <Box>
        <Heading as="h3">{curious.text}</Heading>
        <Row>
          <Button
            onClick={handleClick}
            size="small"
            style={{ marginTop: "3rem" }}
          >
            Another...
          </Button>
          <Button onClick={moveBack} size="samll" style={{ marginTop: "3rem" }}>
            &larr; Back !
          </Button>
        </Row>
      </Box>
    </StyledCuriousPage>
  );
}

export default CuriousPage;
