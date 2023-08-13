import styled from "styled-components";

import Button from "../ui/Button";
import { useState } from "react";
import Row from "../ui/Row";
import { useJoke } from "../feautures/recipes/useJoke";
import Spinner from "../ui/Spinner";
import Error from "./Error";
import { Link } from "react-router-dom";
const StyledJokePage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin-left: 10%;
`;
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

const Box = styled.div`
  /* box */
  /* 
  background-color: var(--color-grey-0); */
  height: 80%;
  padding: 4.8rem;
  text-align: center;
  margin-bottom: 2rem;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
function JokePage() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  // const [more, setMore] = useState(false);
  const [timeStampKey, setTimeStampKey] = useState(timestamp);

  // const uid = useRef(timestamp);
  const { isLoading, joke, error } = useJoke(timeStampKey);

  function handleClick() {
    setTimeStampKey(timestamp);
    console.log("timestamp :", timestamp);
  }

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <StyledJokePage>
      <Box
        style={{
          backgroundImage: "url(/paper.jpg)",
          borderRadius: "var(--border-radius-md)",
          border: "solid 0.5rem var(--color-my-700)",
        }}
      >
        <StyledSpeechBubble>{joke.text}</StyledSpeechBubble>
        <Row type="horizontal" style={{ justifyContent: "space-around" }}>
          <Button
            onClick={handleClick}
            size="small"
            style={{
              cursor: "pointer",
              color: "var(--color-pen-700)",
              backgroundColor: "var(--color-my-700)",
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              marginBottom: "1rem",
              borderRadius: "40px",
            }}
          >
            Another...
          </Button>

          <Link to={`/`}>
            <Button
              size="small"
              style={{
                cursor: "pointer",
                color: "var(--color-pen-700)",
                backgroundColor: "var(--color-my-700)",
                padding: "0.5rem 1rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
                borderRadius: "40px",
              }}
            >
              &larr; Home
            </Button>
          </Link>
        </Row>
      </Box>
    </StyledJokePage>
  );
}

export default JokePage;
