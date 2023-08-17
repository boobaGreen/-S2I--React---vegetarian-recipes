import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Row from "../ui/Row";
import {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  buttonStyle,
} from "../styles/styledComponents/styledCurious";

function FavNotFound() {
  return (
    <StyledCuriousPage>
      <Box
        style={{
          backgroundImage: "url(/paper.jpg)",
          borderRadius: "var(--border-radius-md)",
          border: "solid 0.5rem var(--color-my-back)",
        }}
      >
        <StyledTitle>❤️ to add!</StyledTitle>
        <StyledSpeechBubble>
          {"Your favorites list is empty..."}
        </StyledSpeechBubble>
        <Row type="horizontal" style={{ justifyContent: "space-around" }}>
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

export default FavNotFound;
