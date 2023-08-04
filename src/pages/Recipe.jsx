import { useParams } from "react-router-dom";
import { useRecipe } from "../feautures/recipes/useRecipe";
import { styled } from "styled-components";
import Spinner from "../ui/Spinner";
import Error from "./Error";
import Heading from "../ui/Heading";
import Info from "../element/Info";
import Type from "../element/Type";

const StyledGridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 8fr 1fr 1fr 1fr;
  grid-template-areas:
    "photo photo info"
    "title title type"
    "nutrition ingredients wine"
    "istruction istruction istruction";
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
const StyledDivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgreen;
  grid-area: title;
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
  console.log("1 general ", data);
  console.log("2 istructions", data.analyzedInstructions[0].steps);

  console.log("Istructions Lenght", data.analyzedInstructions[0].steps.length);

  const istruction = data.analyzedInstructions[0].steps[0];
  console.log("3 Istruction", istruction);

  const number = istruction.number;
  console.log("4.a Istruction Number", number);

  const info = istruction.step;
  console.log("4.b Istruction Info", info);

  const {
    title,
    vegan,
    glutenFree,
    dairyFree,
    healthScore,
    image,
    id,
    readyInMinutes,
    servings,
    pricePerServing,
    dishTypes,
  } = data;

  const summary = data.summary;

  const extendedIngredients = data.extendedIngredients;
  console.log(extendedIngredients);
  console.log(extendedIngredients.length);

  const ingredient = data.extendedIngredients[0];
  console.log("ingredient", ingredient);

  const aisle = ingredient.aisle;
  const amountDescr = ingredient.amount;
  const recipeId = ingredient.id;
  const recipeImage = ingredient.image;
  const original = ingredient.original;
  const unitShort = ingredient.measures.metric.unitShort;
  const amount = ingredient.measures.metric.amount;

  console.log(
    aisle,
    amountDescr,
    recipeId,
    recipeImage,
    original,
    unitShort,
    amount
  );

  const nutrientsTemp = ingredient.nutrition;
  console.log("nutrients", nutrientsTemp);

  const caloricBreakdown = data.nutrition.caloricBreakdown;
  const percentCarbs = caloricBreakdown.percentCarbs;
  const percentFat = caloricBreakdown.percentFat;
  const percentProtein = caloricBreakdown.percentProtein;
  console.log("% carb,fat,prot", percentCarbs, percentFat, percentProtein);
  const nutrients = data.nutrition.nutrients;
  const caloriesGen = data.nutrition.nutrients[0];
  const amountCalories = data.nutrition.nutrients[0].amount;
  const nameCalories = data.nutrition.nutrients[0].name;

  const percentOfDailyNeedsCal =
    data.nutrition.nutrients[0].percentOfDailyNeeds;
  const unitCal = data.nutrition.nutrients[0].unit;
  console.log(
    "Calories :",
    nutrients,
    caloriesGen,
    amountCalories,
    nameCalories,
    unitCal,
    percentOfDailyNeedsCal
  );

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <StyledGridContainer>
        <StyledDivTitle>
          <Heading as="h2">{title}</Heading>
        </StyledDivTitle>
        <StyledDivPhoto
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></StyledDivPhoto>
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
        <StyledDivNutrion></StyledDivNutrion>
        <StyledDivIngredients></StyledDivIngredients>
        <StyledDivIstructions></StyledDivIstructions>
        <StyledDivWine></StyledDivWine>
      </StyledGridContainer>
    </>
  );
}

export default Recipe;
