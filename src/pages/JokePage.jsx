import { useState } from "react";
import { useJoke } from "../hooks/useJoke";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import Error from "./Error";

import {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  buttonStyle,
} from "../styles/styledComponents/styledCurious";

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
    <StyledCuriousPage>
      <Box
        style={{
          backgroundImage: "url(/paper.jpg)",
          borderRadius: "var(--border-radius-md)",
          border: "solid 0.5rem var(--color-my-back)",
        }}
      >
        <StyledTitle>Joke</StyledTitle>
        <StyledSpeechBubble>{joke.text}</StyledSpeechBubble>
        <Row type="horizontal" style={{ justifyContent: "space-around" }}>
          <Button
            onClick={handleClick}
            size="medium"
            style={{
              buttonStyle,
            }}
          >
            Another...
          </Button>

          <Link to={`/`}>
            <Button
              size="medium"
              style={{
                buttonStyle,
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

export default JokePage;
