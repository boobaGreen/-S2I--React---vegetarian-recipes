import { useLocation } from "react-router-dom";

import styled from "styled-components";

import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "../ui/DarkModeToggle";
import Heading from "../ui/Heading";
import { useState } from "react";

const StyledHeader = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;
const StyledBtn = styled.button`
  font-size: 1.8rem;
  color: #1f2937;
  height: auto;
  width: auto;
  background-color: var(--color-brand-200);
  padding: 5px 10px;
  border-radius: 100%;
`;

function Header() {
  const location = useLocation();

  const pageTest = location.pathname;

  const [showFilter, setShowFilter] = useState(false);

  function handleShowFilter() {
    setShowFilter((showFilter) => !showFilter);
    // setIsDarkMode((isDark) => !isDark);
  }

  return (
    <StyledHeader>
      <Row type="horizontal" justify="center">
        <Heading as="h1">Vegetarian Recipes</Heading>
      </Row>
      <Row
        type="horizontal"
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginRight: "5rem",
        }}
      >
        {pageTest === "/recipes" ? (
          <StyledBtn onClick={handleShowFilter}>
            Advanced<span style={{ fontSize: "2.8rem" }}>🧐</span>
          </StyledBtn>
        ) : (
          <StyledBtn style={{ visibility: "hidden", cursor: "auto" }}>
            Advanced<span style={{ fontSize: "2.8rem" }}>🧐</span>🧐
          </StyledBtn>
        )}
        <DarkModeToggle />
      </Row>
      {pageTest === "/recipes" ? <Option showFilter={showFilter} /> : null}
    </StyledHeader>
  );
}

export default Header;
