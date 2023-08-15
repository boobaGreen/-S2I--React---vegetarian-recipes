import apiClient from "./http-common";
import { apiKey } from "../const/apiKey";

const KEY = apiKey;

export async function getJoke() {
  const { data, error } = await apiClient.get(
    `https://api.spoonacular.com/food/jokes/random?apiKey=${KEY}`
  );
  //
  if (error) {
    console.error(error);
    throw new Error("Joke could not be loaded");
  }

  return data;
}
