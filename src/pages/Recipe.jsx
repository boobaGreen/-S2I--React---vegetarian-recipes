import { useParams } from "react-router-dom";
import { useRecipe } from "../feautures/recipes/useRecipe";
import { styled } from "styled-components";
import Spinner from "../ui/Spinner";
import Error from "./Error";
import Heading from "../ui/Heading";
import Info from "../element/Info";
import Type from "../element/Type";
import Nutrition from "../element/Nutrition";
import Istructions from "../element/Istructions";
import Ingredients from "../element/Ingredients";
import Wine from "../element/Wine";
import WinePhoto from "../element/WinePhoto";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content auto;
  grid-template-columns: 75% 1fr;
  grid-template-areas:
    "photo info"
    "ingredients type"
    "istructions istructions"
    "wine winePhoto"
    "nutrition nutrition";
  text-align: center;
  grid-gap: 5rem;
`;

const StyledDivPhoto = styled.div`
  background: var(--color-grey-200);
  grid-area: photo;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.25rem;
`;
const StyledInfo = styled.div`
  grid-area: info;
  padding: 0.25rem;
`;
const StyledDivType = styled.div`
  grid-area: type;
  padding: 0.25rem;
`;
const StyledDivNutrion = styled.div`
  grid-area: nutrition;
  padding: 0.25rem;
`;
const StyledDivIngredients = styled.div`
  grid-area: ingredients;
  padding: 0.25rem;
`;
const StyledDivIstructions = styled.div`
  grid-area: istructions;
  padding: 0.25rem;
`;

const StyledDivWinePhoto = styled.div`
  grid-area: winePhoto;
  padding: 0.25rem;
`;

const StyledDivWine = styled.div`
  grid-area: wine;
  padding: 0.25rem;
`;

function Recipe({ recipe }) {
  const { id: idCustom } = useParams();
  const { isLoading, recipe: data, error } = useRecipe(idCustom);

  if (isLoading) return null;
  if (error) return <Error />;

  const percentCarbs = data.nutrition.caloricBreakdown.percentCarbs;
  const percentFat = data.nutrition.caloricBreakdown.percentFat;
  const percentProtein = data.nutrition.caloricBreakdown.percentProtein;

  // const amountCalories = data.nutrition.nutrients[0].amount;
  const percentOfDailyNeedsCal =
    data.nutrition.nutrients[0].percentOfDailyNeeds;
  const istructionsArray = data.analyzedInstructions[0].steps;

  const {
    title,
    vegan,
    glutenFree,
    dairyFree,
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
  const dataPieNutrient = {
    labels: ["Carb", "Prot", "Fats"],
    datasets: [
      {
        label: "%",
        data: [percentCarbs, percentProtein, percentFat],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataPieCalories = {
    labels: [`kcal per serving`, `kcal rest of the day`],
    datasets: [
      {
        label: `%`,
        data: [percentOfDailyNeedsCal, 100 - percentOfDailyNeedsCal],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <StyledGridContainer>
        <StyledDivIstructions>
          <Istructions istructionsArray={istructionsArray} />
        </StyledDivIstructions>
        <StyledDivPhoto
          style={{
            backgroundImage: `url(${image})`,
            overflow: "hidden",
            padding: "1rem",
          }}
        >
          <Heading
            style={{
              fontSize: "1.2rem",
              backgroundColor: "var(--color-grey-200)",
              width: "max-content",
              height: "max-content",
              borderRadius: "20px",
              padding: "1rem",
            }}
          >
            {title}
          </Heading>
        </StyledDivPhoto>
        <StyledInfo>
          <Info
            vegan={vegan}
            dairyFree={dairyFree}
            glutenFree={glutenFree}
            readyInMinutes={readyInMinutes}
            servings={servings}
            pricePerServing={pricePerServing}
          ></Info>
        </StyledInfo>
        <StyledDivIngredients>
          <Ingredients extendedIngredients={extendedIngredients} />
        </StyledDivIngredients>
        <StyledDivType>
          <Type dishTypes={dishTypes} />
        </StyledDivType>
        <StyledDivWine>
          <Wine pairingText={pairingText} />
        </StyledDivWine>
        <StyledDivWinePhoto>
          <WinePhoto productMatches={productMatches} />
        </StyledDivWinePhoto>
        <StyledDivNutrion>
          <Nutrition
            dataPieCalories={dataPieCalories}
            dataPieNutrient={dataPieNutrient}
          />
        </StyledDivNutrion>
      </StyledGridContainer>
    </>
  );
}

export default Recipe;
