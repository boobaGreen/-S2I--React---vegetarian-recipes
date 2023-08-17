import { useState } from "react";
import { useCurious } from "../hooks/useCurious";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Button from "../ui/Button";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import Error from "./Error";

const StyledTitle = styled.div`
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  border-radius: 1rem;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: #d23;
  border: 0.5rem double #d23;
  transform: rotate(3deg);
  -webkit-mask-position: 2rem 3rem;
  font-size: 2rem;
  margin-bottom: 3rem;
`;
const StyledSpeechBubble = styled.main`
  color: var(--color-my-logo);
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-left: 20%;
`;

const Box = styled.div`
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
      <Box
        style={{
          backgroundImage: "url(/paper.jpg)",
          borderRadius: "var(--border-radius-md)",
          border: "solid 0.5rem var(--color-my-back)",
        }}
      >
        <StyledTitle>Curiosity</StyledTitle>
        <StyledSpeechBubble>{curious.text}</StyledSpeechBubble>
        <Row type="horizontal" style={{ justifyContent: "space-around" }}>
          <Button
            onClick={handleClick}
            size="small"
            style={{
              cursor: "pointer",
              color: "var(--color-my-pen)",
              backgroundColor: "var(--color-my-back)",
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
              size="medium"
              style={{
                cursor: "pointer",
                color: "var(--color-my-pen)",
                backgroundColor: "var(--color-my-back)",
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
    </StyledCuriousPage>
  );
}

export default CuriousPage;
