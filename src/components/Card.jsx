import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

import { styled } from "styled-components";

import Heading from "../ui/Heading";
import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";
import { LuMilkOff } from "react-icons/lu";

const StyledCardContainer = styled.ul`
  overflow: hidden;
  display: flex;
  padding: 1rem;
  height: 30rem;
  width: 100%;

  // media query for card views "column"
  @media (min-width: 800px) {
    width: 50%;
  }
  @media (min-width: 1400px) {
    width: 33.3333%;
  }
`;
const StyledSpan = styled.span`
  display: inline-block;
  cursor: pointer;
  color: var(--color-my-back);
  font-size: 2.5rem;
  &:hover {
    outline: none;
    transform: translateY(-3px);
  }
  &:active {
    outline: none;
    transform: translateX(+6px);
  }
`;
const StyledCard = styled.li`
  background-image: url("/paper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: var(--shadow-lg);
  border: solid 0.5rem var(--color-my-back);
  display: flex;
  padding: 1rem;
  width: 100%;
  gap: 3%;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-grow: 1;

  border-radius: 3rem;
`;
const StyledButton = styled.button`
  color: var(--color-my-pen);
  background-color: var(--color-my-back);
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    outline: none;
    background-color: var(--color-nav-hover);
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const StyledDiv = styled.div``;

function Card({ recipe, handleAddRecipe, favouriteList, handleDeleteRecipe }) {
  const {
    image,
    id,
    title,
    readyInMinutes,
    glutenFree,
    vegan,
    dairyFree,
    pricePerServing,
  } = recipe;

  console.log("recipe : ", recipe);
  const url = "url(" + image + ")";

  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });

  const isXxs = useMediaQuery({
    query: "screen and (max-width: 350px)",
  });

  let dim;

  isLittle ? (dim = 32) : (dim = 42);
  if (isXxs) {
    dim = 26;
  }

  let styleIfMilk = {};
  isLittle
    ? (styleIfMilk = {
        fontSize: "3.5rem",
        color: "var(--color-green-fix)",
        strokeWidth: "1px",
      })
    : (styleIfMilk = {
        fontSize: "4.5rem",
        color: "var(--color-green-fix)",
        strokeWidth: "1px",
      });
  if (isXxs) {
    styleIfMilk = {
      fontSize: "2.5rem",
      color: "var(--color-green-fix)",
      strokeWidth: "1px",
    };
  }

  let titleAbr;
  !isLittle
    ? (titleAbr = title.length <= 45 ? title : title.slice(0, 40) + "...")
    : (titleAbr = title.length <= 25 ? title : title.slice(0, 22) + "...");

  const titleToPass = title.replace(/\//g, " ");
  // str = str.replace (/\//g, "_");

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
      <StyledCard
        style={{
          backgroundColor: "var(--color-my-back)",
          borderRadius: "4rem",
        }}
      >
        <StyledBlock
          style={{
            backgroundImage: url,
            width: "45%",
            borderRadius: "2rem",
            border: "solid 0.25rem var(--color-my-back)",
          }}
        >
          <StyledDiv
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledSpan onClick={clickHandle} style={{ marginLeft: "0.5rem" }}>
              {alreadyIncludes() ? <span>❤️</span> : <span>🤍</span>}
            </StyledSpan>

            <Link to={`/recipes/${id}/${titleToPass}`}>
              {!isLittle ? (
                <StyledButton>More Info</StyledButton>
              ) : !isXxs ? (
                <StyledButton>+ Info</StyledButton>
              ) : (
                <StyledButton>+</StyledButton>
              )}
            </Link>
          </StyledDiv>
        </StyledBlock>
        <StyledBlock style={{ width: "50%" }}>
          <StyledBlock
            style={{
              flexDirection: "column",
            }}
          >
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
                    <IconGlutenFree dim={dim} />
                    <Tooltip id="gluten-tooltip" openOnClick={["click"]} />
                  </StyledDiv>
                ) : null}
                {vegan ? (
                  <StyledDiv
                    data-tooltip-id="vegan-tooltip"
                    data-tooltip-content="Vegan"
                  >
                    <IconVegan dim={dim} />
                    <Tooltip id="vegan-tooltip" openOnClick={["click"]} />
                  </StyledDiv>
                ) : null}
                {dairyFree ? (
                  <StyledDiv
                    data-tooltip-id="dairy-tooltip"
                    data-tooltip-content="Dairy-Free"
                  >
                    <LuMilkOff style={styleIfMilk} />
                    <Tooltip id="dairy-tooltip" openOnClick={["click"]} />
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
                <Heading as="h2" style={{ color: "var(--color-green-fix)" }}>
                  {titleAbr}
                </Heading>
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
                <IconTimer dim={dim} />
                <Heading as="h4" style={{ color: "var(--color-green-fix)" }}>
                  {readyInMinutes} min
                </Heading>
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
              >
                <Tooltip id="money-tooltip" openOnClick={["click"]} />
                <IconMoney dim={dim} />
                <Heading as="h4" style={{ color: "var(--color-green-fix)" }}>
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
