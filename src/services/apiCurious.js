// api request for have a Curiosity from api spoonacular.com

import { apiKey } from "../const/apiKey";
import apiClient from "./http-common";

const KEY = apiKey;

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
