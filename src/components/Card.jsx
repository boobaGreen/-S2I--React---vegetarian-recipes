import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

import Heading from "../ui/Heading";
import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";
import { LuMilkOff } from "react-icons/lu";

import {
  StyledCardContainer,
  StyledSpan,
  StyledCard,
  StyledBlock,
  StyledButton,
  StyledDiv,
  StyledImgBlock,
  StyledInfoPics,
  StyledInfoBlock,
  StyledBlockInfo2,
  StyledBlockTimer,
  StyledBlockPrice,
} from "../styles/styledComponents/styledCard";

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

  // -- CALCULATION FOR IMAGE COMPLETE URL
  const url = "url(" + image + ")";

  // -- SECTION FOR MEDIA QUERY SETTINGS
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

  // SECTION FOR MAKE SHORTER THE LONG TITLE IN PREVIEW LIST OF RECIPES
  let titleAbr;
  !isLittle
    ? (titleAbr = title.length <= 45 ? title : title.slice(0, 40) + "...")
    : (titleAbr = title.length <= 25 ? title : title.slice(0, 22) + "...");
  const titleToPass = title.replace(/\//g, " ");
  // str = str.replace (/\//g, "_");

  // SECTION FOR CALCULATION IF A RECIPE IS ALREADY IN FAVOURITE LISTS
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
        <StyledImgBlock style={{ backgroundImage: url }}>
          <StyledInfoPics>
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
          </StyledInfoPics>
        </StyledImgBlock>
        <StyledInfoBlock style={{ width: "50%" }}>
          <StyledBlock
            style={{
              flexDirection: "column",
              height: "100%",
            }}
          >
            <StyledBlock style={{ height: "33%" }}>
              <StyledBlockInfo2>
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
              </StyledBlockInfo2>
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
              <StyledBlockTimer
                data-tooltip-id="timer-tooltip"
                data-tooltip-content="Time for Preparation & Cooking"
              >
                <IconTimer dim={dim} />
                <Heading as="h4" style={{ color: "var(--color-green-fix)" }}>
                  {readyInMinutes} min
                </Heading>
                <Tooltip id="timer-tooltip" openOnClick={["click"]} />
              </StyledBlockTimer>
              <StyledBlockPrice
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
              </StyledBlockPrice>
            </StyledBlock>
          </StyledBlock>
        </StyledInfoBlock>
      </StyledCard>
    </StyledCardContainer>
  );
}

export default Card;
