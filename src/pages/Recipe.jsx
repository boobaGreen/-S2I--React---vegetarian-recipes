import { useParams } from "react-router-dom";
import { useRecipe } from "../feautures/recipes/useRecipe";

import Error from "./Error";

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

  const equipments = istruction.equipment;
  console.log("4.c Equipments", equipments);

  console.log("4.d Equipments length", equipments.length);

  const equipment = equipments[0];
  console.log("5.a Equipment id", equipment.id);
  console.log("5.b Equipment name", equipment.name);

  const vegan = data.vegan;
  const glutenFree = data.glutenFree;
  const dairyFree = data.dairyFree;
  const healthScore = data.healthScore;
  const sourceName = data.sourceName;
  console.log(vegan, glutenFree, dairyFree, healthScore, sourceName);
  const pricePerServing = data.pricePerServing;
  const id = data.id;
  const title = data.title;
  const readyInMinutes = data.readyInMinutes;
  const servings = data.servings;
  const image = data.image;
  const summary = data.summary;
  console.log(
    pricePerServing,
    id,
    title,
    readyInMinutes,
    servings,
    image,
    summary
  );
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

  console.log(vegan, glutenFree, dairyFree, healthScore, sourceName);

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

  //winepairing
  //diets
  //dishtypes

  return <h1>recipe n: {idCustom}</h1>;
}

export default Recipe;
