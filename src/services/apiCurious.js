import apiClient from "./http-common";
import { ApiKey } from "../const/const";

const KEY = ApiKey;

export async function getCurious() {
  const { data, error } = await apiClient.get(
    `https://api.spoonacular.com/food/trivia/random?apiKey=${KEY}`
  );
  //
  if (error) {
    console.error(error);
    throw new Error("Trivia could not be loaded");
  }

  return data;
}
