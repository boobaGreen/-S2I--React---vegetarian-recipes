import { useState } from "react";
import { useCurious } from "../hooks/useCurious";
import { Link } from "react-router-dom";

import {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  buttonStyle,
} from "../styles/styledComponents/styledCurious";

import Button from "../ui/Button";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function CuriousPage() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

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
    <StyledCuriousPage>
      <Box>
        <StyledTitle>Curiosity</StyledTitle>
        <StyledSpeechBubble>{curious.text}</StyledSpeechBubble>
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

export default CuriousPage;
