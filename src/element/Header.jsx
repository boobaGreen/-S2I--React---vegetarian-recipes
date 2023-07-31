import { useLocation } from "react-router-dom";

import styled from "styled-components";

import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "../ui/DarkModeToggle";
import Heading from "../ui/Heading";

const StyledHeader = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 1rem;
`;

function Header() {
  const location = useLocation();

  const pageTest = location.pathname;

  return (
    <StyledHeader>
      <Row type="horizontal" justify="center">
        <Heading as="h1">Vegetarian Recipe</Heading>
      </Row>
      <Row
        type="horizontal"
        style={{ width: "100%", justifyContent: "end", marginRight: "5rem" }}
      >
        <DarkModeToggle />
      </Row>

      {pageTest === "/recipes" ? <Option /> : null}
    </StyledHeader>
  );
}

export default Header;
