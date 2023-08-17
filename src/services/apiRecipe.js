import { apiKey } from "../const/apiKey";
import apiClient from "./http-common";

const KEY = apiKey;

export async function getRecipe(id) {
  const idString = id?.toString();

  const { data, error } = await apiClient.get(
    `https://api.spoonacular.com/recipes/${idString}/information?apiKey=${KEY}&includeNutrition=true`
  );
  //
  if (error) {
    console.error(error);
    throw new Error("Recipe could not be loaded");
  }

  return data;
}
