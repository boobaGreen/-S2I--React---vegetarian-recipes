import apiClient from "./http-common";

import { apiKey } from "../const/apiKey";

const KEY = apiKey;

export async function getRecipes(
  search,
  diet,
  intolerances,
  type,
  number,
  offset,
  maxReadyTime,
  sort,
  direction
) {
  const numberString = number?.toString();

  const { data, error } = await apiClient.get(
    `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&query=${search}&diet=${diet}&intolerances=${intolerances}&type=${type}&maxReadyTime=${maxReadyTime}&sort=${sort}&sortDirection=${direction}&addRecipeNutrition=true&instructionsRequired=true&number=${numberString}&offset=${offset}`
  );

  if (error) {
    console.error(error);
    throw new Error("Recipes could not be loaded");
  }

  return data;
}
