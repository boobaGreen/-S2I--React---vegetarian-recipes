import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineFunnel } from "react-icons/hi2";
import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "../ui/DarkModeToggle";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const StyledMini = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  background-image: url("/paper.jpg");
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const StyledHeader = styled.div`
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
  font-size: 2.5rem;
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: var(--color-vegan-logo);
  border: 0.5rem solid var(--color-vegan-logo);
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-3deg);
  border-radius: 0;
`;
const StyledTitleMini = styled.div`
  height: auto;
  font-size: 2rem;
  font-weight: 600;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: var(--color-vegan-logo);
  border: 0.2rem solid var(--color-vegan-logo);
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-1deg);
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

  const isSm = useMediaQuery({
    query: "(max-width: 700px)",
  });
  if (!isSm)
    return (
      <StyledHeader>
        <Row
          type="horizontal"
          justify="center"
          style={{
            backgroundImage: "url(/paper.jpg)",
            padding: "1rem 3rem 2.8rem 3rem",
            // paddingBottom: "2.8rem ",
            borderRadius: "2rem",
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
            !showFilter ? (
              <StyledBtn onClick={handleShowFilter}>
                <HiOutlineFunnel />
              </StyledBtn>
            ) : (
              <StyledBtn onClick={handleShowFilter}>
                <AiOutlineClose />
              </StyledBtn>
            )
          ) : (
            <StyledBtn style={{ visibility: "hidden", cursor: "auto" }}>
              <HiOutlineFunnel />
            </StyledBtn>
          )}
          <DarkModeToggle />
        </Row>
        {pageTest === "/recipes" ? <Option showFilter={showFilter} /> : null}
      </StyledHeader>
    );
  return (
    <div>
      <Row
        type="horizontal"
        justify="center"
        style={{
          padding: "1rem 1rem 1rem 1rem",
          borderRadius: "2rem",
          // backgroundImage: "url(/paper.jpg)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            height: "100%",
          }}
        >
          {title ? (
            <StyledMini>
              <StyledTitleMini>{title}</StyledTitleMini>
            </StyledMini>
          ) : (
            <StyledMini>
              <StyledTitleMini>Vegetarian Recipes</StyledTitleMini>
            </StyledMini>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginLeft: "1rem",
            }}
          >
            <div>
              <DarkModeToggle />
            </div>
            <div>
              {pageTest === "/recipes" ? (
                !showFilter ? (
                  <StyledBtn onClick={handleShowFilter}>
                    <HiOutlineFunnel />
                  </StyledBtn>
                ) : (
                  <StyledBtn onClick={handleShowFilter}>
                    <AiOutlineClose />
                  </StyledBtn>
                )
              ) : (
                <StyledBtn style={{ visibility: "hidden", cursor: "auto" }}>
                  <HiOutlineFunnel />
                </StyledBtn>
              )}
            </div>
          </div>
        </div>
      </Row>
      {pageTest === "/recipes" ? <Option showFilter={showFilter} /> : null}
    </div>
  );
}

export default Header;
