import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { HiOutlineFunnel } from "react-icons/hi2";
import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "../ui/DarkModeToggle";
import { useState } from "react";

const StyledHeader = styled.div`
  /* background-color: var(--color-grey-50); */
  /* background-image: url("/wood.webp"); */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
const StyledTitle = styled.div`
  margin-top: 2rem;
  transform: rotate(12deg);
  font-size: 3rem;
  font-weight: 700;
  border: 0.25rem solid #555;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: var(--color-vegan-logo);
  border: 0.5rem solid --color-vegan-logo;
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-3deg);
  border-radius: 0;
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
        style={{
          backgroundImage: "url(/paper.jpg)",
          padding: "1rem 3rem 2.5rem 3rem",
          paddingBottom: "2.8rem ",
        }}
      >
        {title ? (
          <StyledTitle> {title}</StyledTitle>
        ) : (
          <StyledTitle>Vegetarian Recipes</StyledTitle>
        )}
      </Row>
      <Row
        type="horizontal"
        style={{
          width: "90%",
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
