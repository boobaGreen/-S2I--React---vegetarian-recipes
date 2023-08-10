import styled from "styled-components";

import Button from "../ui/Button";
import { useState } from "react";
import Row from "../ui/Row";
import { useCurious } from "../feautures/recipes/useCurious";

import Spinner from "../ui/Spinner";
import Error from "./Error";
import { Link } from "react-router-dom";
const StyledSpeechBubble = styled.main`
  color: var(--color-brand-800);
  background: #efefef;
  border-radius: 4px;
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 0 auto 40px;
  max-width: 400px;
  padding: 15px;
  position: relative;

  p {
    margin: 0 0 10px;

    :last-of-type {
      margin-bottom: 0;
    }
  }

  &::after {
    border-left: 20px solid transparent;
    border-top: 20px solid #efefef;
    bottom: -20px;
    content: "";
    position: absolute;
    right: 20px;
  }
`;
const StyledCuriousPage = styled.main`
  background-image: url("/paper.jpg");
  /* background-image: url("/wallBirgo.jpg"); */
  background-size: cover;
  /* background-color: var(--color-grey-50); */
  display: flex;
  align-items: start;
  justify-content: center;
`;

const Box = styled.div`
  /* background-image: url("/wood.webp"); */
  /* background-image: url("/WallBirgo.jpg"); */
  /* box */

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
function CuriousPage() {
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
        {/* <Heading as="h3">{curious.text}</Heading> */}
        <StyledSpeechBubble>{curious.text}</StyledSpeechBubble>
        <Row type="horizontal" style={{ justifyContent: "space-around" }}>
          <Button
            onClick={handleClick}
            size="small"
            style={{
              marginTop: "3rem",
              backgroundColor: "#A7F3D0",
              color: "#1f2937",
              padding: "3px 6px",
            }}
          >
            Another...
          </Button>
          <Link to={`/`}>
            <Button
              size="small"
              style={{
                marginTop: "3rem",
                backgroundColor: "#A7F3D0",
                color: "#1f2937",
                padding: "3px 6px",
              }}
            >
              &larr; Home
            </Button>
          </Link>
        </Row>
      </Box>
    </StyledCuriousPage>
  );
}

export default CuriousPage;
