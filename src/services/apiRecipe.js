import apiClient from "./http-common";
import { ApiKey } from "../const/const";

const KEY = ApiKey;

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
