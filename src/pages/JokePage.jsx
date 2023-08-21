import { useState } from "react";
import { useJoke } from "../hooks/useJoke";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Error from "./Error";

import {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  buttonStyle,
  StyledDiv,
} from "../styles/styledComponents/styledCurious";
import { useMediaQuery } from "react-responsive";

// add to the query the TimeStamp to avoid that react query avoids fetching a new request because it has the same data in the input query

function JokePage() {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 600px)",
  });
  let styleIf = {
    flexDirection: "column",
    gap: "1rem",
  };
  if (!isLittle) {
    styleIf = {
      flexDirection: "row",
      gap: "1rem",
    };
  }
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
        <StyledTitle>😂 Joke</StyledTitle>
        <StyledSpeechBubble>{joke.text}</StyledSpeechBubble>
        <StyledDiv style={styleIf}>
          <Link to={``}>
            <Button
              onClick={handleClick}
              size="medium"
              style={{
                buttonStyle,
              }}
            >
              {!isLittle ? (
                <p>Another...</p>
              ) : (
                <p style={{ fontSize: "2rem" }}> + </p>
              )}
            </Button>
          </Link>
          <Link to={`/`}>
            <Button
              size="medium"
              style={{
                buttonStyle,
              }}
            >
              {!isLittle ? (
                <p>&larr; Home</p>
              ) : (
                <p style={{ height: "2.8rem", width: "1.4rem" }}>&larr;</p>
              )}
            </Button>
          </Link>
        </StyledDiv>
      </Box>
    </StyledCuriousPage>
  );
}

export default JokePage;
