import { Tooltip } from "react-tooltip";

import { styled } from "styled-components";

import Heading from "../ui/Heading";
import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";

import { Link } from "react-router-dom";

//
const StyledCardContainer = styled.ul`
  //background: var(--color-red-700);
  overflow: hidden;
  display: flex;
  padding: 1rem;
  height: 30rem;
  width: 100%;

  @media (min-width: 55rem) {
    width: 50%;
  }
  @media (min-width: 75rem) {
    width: 33.3333%;
  }
`;
const StyledSpan = styled.span`
  display: inline-block;
  cursor: pointer;
  color: var(--color-brand-800);
  font-size: 2.5rem;
`;
const StyledCard = styled.li`
  background-color: var(--color-grey-100);

  box-shadow: var(--shadow-lg);

  display: flex;
  padding: 1rem;
  width: 100%;
  gap: 3%;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledDiv = styled.div``;

const StyledBlockScroll = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Card({ recipe, handleAddRecipe, favouriteList, handleDeleteRecipe }) {
  const {
    image,
    id,
    title,
    readyInMinutes,
    glutenFree,
    vegan,
    pricePerServing,
  } = recipe;

  const url = "url(" + image + ")";
  const titleAbr = title.length <= 45 ? title : title.slice(0, 40) + "...";

  function alreadyIncludes() {
    let check = favouriteList.some((el) => el.id === id);
    return check;
  }
  function clickHandle() {
    if (!alreadyIncludes()) {
      handleAddRecipe(recipe);
    }
    if (alreadyIncludes()) {
      handleDeleteRecipe(id);
    }
  }

  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledBlock style={{ backgroundImage: url, width: "45%" }}>
          <StyledDiv
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledSpan onClick={clickHandle}>
              {alreadyIncludes() ? <span>❤️</span> : <span>🤍</span>}
            </StyledSpan>

            <Link to={`/recipes/${id}`}>
              <button
                style={{
                  backgroundColor: "#10B981",
                  padding: "0.5rem 1rem",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "40px",
                }}
              >
                More Info
              </button>
            </Link>
          </StyledDiv>
        </StyledBlock>
        <StyledBlock style={{ width: "50%" }}>
          <StyledBlock style={{ flexDirection: "column" }}>
            <StyledBlock style={{ height: "33%" }}>
              <StyledBlock
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "5px",
                  cursor: "pointer",
                }}
              >
                {glutenFree ? (
                  <StyledDiv
                    data-tooltip-id="gluten-tooltip"
                    data-tooltip-content="Gluten-Free"
                  >
                    <IconGlutenFree />
                    <Tooltip id="gluten-tooltip" openOnClick={["click"]} />
                  </StyledDiv>
                ) : null}
                {vegan ? (
                  <StyledDiv
                    data-tooltip-id="vegan-tooltip"
                    data-tooltip-content="Vegan"
                  >
                    <IconVegan />
                    <Tooltip id="vegan-tooltip" openOnClick={["click"]} />
                  </StyledDiv>
                ) : null}
              </StyledBlock>
            </StyledBlock>

            <StyledBlock style={{ height: "33%" }}>
              <StyledBlock
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <StyledBlockScroll
                  style={{ flexDirection: "column", marginTop: "1.8rem" }}
                >
                  <Heading as="h2">{titleAbr} </Heading>
                </StyledBlockScroll>
              </StyledBlock>
            </StyledBlock>
            <StyledBlock
              style={{
                height: "33%",
                justifyContent: " space-around",
                paddingLeft: "2rem",
              }}
            >
              <StyledBlock
                style={{
                  flexDirection: "column",
                  maxWidth: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",

                  cursor: "pointer",
                }}
                data-tooltip-id="timer-tooltip"
                data-tooltip-content="Time for Preparation & Cooking"
              >
                <IconTimer />
                <Heading as="h4">{readyInMinutes} min</Heading>
                <Tooltip id="timer-tooltip" openOnClick={["click"]} />
              </StyledBlock>
              <StyledBlock
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  cursor: "pointer",
                }}
                data-tooltip-id="money-tooltip"
                data-tooltip-content="Price per Serving"
                data-tooltip-variant="success"
              >
                <Tooltip id="money-tooltip" openOnClick={["click"]} />
                <IconMoney />
                <Heading as="h4">
                  {pricePerServing < 5
                    ? 0.05
                    : (pricePerServing / 100).toFixed(2)}
                  $
                </Heading>
              </StyledBlock>
            </StyledBlock>
          </StyledBlock>
        </StyledBlock>
      </StyledCard>
    </StyledCardContainer>
  );
}

export default Card;
