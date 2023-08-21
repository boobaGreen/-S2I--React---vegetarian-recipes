import { useState } from "react";
import { useCurious } from "../hooks/useCurious";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  StyledDiv,
  buttonStyle,
} from "../styles/styledComponents/styledCurious";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function CuriousPage() {
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
  // add to the query the TimeStamp to avoid that react query avoids fetching a new request because it has the same data in the input query
  
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  const [timeStampKey, setTimeStampKey] = useState(timestamp);

  const { isLoading, curious, error } = useCurious(timeStampKey);

  function handleClick() {
    setTimeStampKey(timestamp);
    console.log("timestamp :", timestamp);
  }

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <StyledCuriousPage>
      <Box>
        <StyledTitle>🌼 Curiosity</StyledTitle>
        <StyledSpeechBubble>{curious.text}</StyledSpeechBubble>
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

export default CuriousPage;
