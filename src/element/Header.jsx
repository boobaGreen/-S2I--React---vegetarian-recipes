import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { HiOutlineFunnel } from "react-icons/hi2";
import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "../ui/DarkModeToggle";
import Heading from "../ui/Heading";
import { useState } from "react";

const StyledHeader = styled.div`
  /* background-color: var(--color-grey-50); */
  /* background-image: url("/wood.webp"); */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;
const StyledBtn = styled.button`
  font-size: 1.8rem;
  color: var(--color-pen-700);
  height: auto;
  width: auto;
  background-color: var(--color-my-700);
  padding: 5px 10px;
  border-radius: 100%;
`;
function Header() {
  const { title } = useParams();
  const location = useLocation();

  const pageTest = location.pathname;

  const [showFilter, setShowFilter] = useState(false);

  function handleShowFilter() {
    setShowFilter((showFilter) => !showFilter);
  }

  return (
    <StyledHeader>
      <Row
        type="horizontal"
        justify="center"
        style={
          {
            // backgroundImage: "url(/wallBirgo.jpg)",
          }
        }
      >
        {title ? (
          <Heading
            as="h1"
            style={{
              color: `var(--color-pen-700)`,
              backgroundColor: `var(--color-vegan-logo)`,
              borderRadius: "5rem",
              padding: "1rem 3rem",
              margin: "1rem",
            }}
          >
            {title}
          </Heading>
        ) : (
          <Heading
            as="h1"
            style={{
              color: `var(--color-pen-700)`,
              backgroundColor: `var(--color-vegan-logo)`,
              borderRadius: "5rem",
              padding: "1rem 3rem",
              margin: "1rem",
            }}
          >
            Vegetarian Recipes
          </Heading>
        )}
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
            {/* Advanced<span style={{ fontSize: "2.8rem" }}>🧐</span> */}
            <HiOutlineFunnel />
          </StyledBtn>
        ) : (
          <StyledBtn style={{ visibility: "hidden", cursor: "auto" }}>
            {/* Advanced<span style={{ fontSize: "2.8rem" }}>🧐</span> */}
            <HiOutlineFunnel />
          </StyledBtn>
        )}
        <DarkModeToggle />
      </Row>
      {pageTest === "/recipes" ? <Option showFilter={showFilter} /> : null}
    </StyledHeader>
  );
}

export default Header;
