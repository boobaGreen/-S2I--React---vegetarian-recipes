import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineFunnel } from "react-icons/hi2";

import Row from "../ui/Row";
import Option from "./Option";
import DarkModeToggle from "./DarkModeToggle";

import {
  StyledTitle,
  StyledMini,
  StyledHeader,
  StyledBtn,
  StyledTitleMini,
} from "../styles/styledComponents/styledHeader";

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

  /*RETURN HEADER IN DESKTOP MODE"*/

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
          {/*If we are in recipe detail page(if title exists) then display title of recipe in header else display the app title "Vegetraian Recipe"*/}
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
          {/*If we are in  search page(home page) display the filter"*/}
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
        {/*If we are in  search page(home page) display the option section (search and navigate result)"*/}
        {pageTest === "/recipes" ? <Option showFilter={showFilter} /> : null}
      </StyledHeader>
    );
  /*RETURN HEADER IN MOBILE MODE"*/
  return (
    <div>
      <Row
        type="horizontal"
        justify="center"
        style={{
          padding: "1rem ",
          borderRadius: "2rem",
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
