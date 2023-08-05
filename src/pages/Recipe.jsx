import { useParams } from "react-router-dom";
import { useRecipe } from "../feautures/recipes/useRecipe";
import { styled } from "styled-components";
import Spinner from "../ui/Spinner";
import Error from "./Error";
import Heading from "../ui/Heading";
import Info from "../element/Info";
import Type from "../element/Type";
import Nutrion from "../element/Nutrion";
import Istructions from "../element/Istructions";
import Ingridients from "../element/Ingridients";
import Wine from "../element/Wine";
import WinePhoto from "../element/WinePhoto";

const StyledGridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  grid-template-areas:
    "istruction istruction nutrition"
    "photo photo info"
    "ingredients ingredients type"
    "wine wine winePhoto";
  text-align: center;
  grid-gap: 0.25rem;
`;

const StyledDivPhoto = styled.div`
  grid-area: photo;

  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.25rem;
`;
const StyledInfo = styled.div`
  background: #1f2128;
  grid-area: info;
  padding: 0.25rem;
`;
const StyledDivType = styled.div`
  background: #1f2128;
  grid-area: type;
  padding: 0.25rem;
`;
const StyledDivNutrion = styled.div`
  background: #a6b8b9;
  grid-area: nutrition;
  padding: 0.25rem;
`;
const StyledDivIngredients = styled.div`
  background: lightpink;
  grid-area: ingredients;
  padding: 0.25rem;
`;
const StyledDivIstructions = styled.div`
  background: lightblue;
  grid-area: istruction;
  padding: 0.25rem;
`;
// const StyledDivTitle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: lightgreen;
//   grid-area: title;
//   padding: 0.25rem;
// `;
const StyledDivWinePhoto = styled.div`
  grid-area: winePhoto;
  padding: 0.25rem;
`;

const StyledDivWine = styled.div`
  background: lightcoral;
  grid-area: wine;
  padding: 0.25rem;
`;

function Recipe() {
  const { id: idCustom } = useParams();

  const { isLoading, recipe: data, error } = useRecipe(idCustom);
  if (isLoading) return null;
  if (error) return <Error />;

  const percentCarbs = data.nutrition.caloricBreakdown.percentCarbs;
  const percentFat = data.nutrition.caloricBreakdown.percentFat;
  const percentProtein = data.nutrition.caloricBreakdown.percentProtein;

  const amountCalories = data.nutrition.nutrients[0].amount;
  const percentOfDailyNeedsCal =
    data.nutrition.nutrients[0].percentOfDailyNeeds;
  const istructionsArray = data.analyzedInstructions[0].steps;

  const {
    title,
    vegan,
    glutenFree,
    dairyFree,
    healthScore,
    image,
    // id,
    readyInMinutes,
    servings,
    pricePerServing,
    dishTypes,
    extendedIngredients,
    winePairing,
  } = data;
  const productMatches = winePairing.productMatches;
  const pairingText = winePairing.pairingText;
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <StyledGridContainer>
        {/* <StyledDivTitle>
          <Heading as="h2">{title}</Heading>
        </StyledDivTitle> */}
        <StyledDivPhoto
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <Heading as="h2">{title}</Heading>
        </StyledDivPhoto>
        <StyledInfo>
          <Info
            vegan={vegan}
            dairyFree={dairyFree}
            glutenFree={glutenFree}
            healthScore={healthScore}
            readyInMinutes={readyInMinutes}
            servings={servings}
            pricePerServing={pricePerServing}
          ></Info>
        </StyledInfo>
        <StyledDivType>
          <Type dishTypes={dishTypes} />
        </StyledDivType>
        <StyledDivNutrion>
          <Nutrion
            percentCarbs={percentCarbs}
            percentFat={percentFat}
            percentProtein={percentProtein}
            percentOfDailyNeedsCal={percentOfDailyNeedsCal}
            amountCalories={amountCalories}
          />
        </StyledDivNutrion>

        <StyledDivIngredients>
          <Ingridients extendedIngredients={extendedIngredients} />
        </StyledDivIngredients>
        <StyledDivIstructions>
          <Istructions istructionsArray={istructionsArray} />
        </StyledDivIstructions>
        <StyledDivWine>
          <Wine pairingText={pairingText} />
        </StyledDivWine>
        <StyledDivWinePhoto>
          <WinePhoto productMatches={productMatches} />
        </StyledDivWinePhoto>
      </StyledGridContainer>
    </>
  );
}

export default Recipe;
