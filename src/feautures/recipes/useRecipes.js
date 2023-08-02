import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";

export function useRecipes(search, diet, intolerances, type, number, offset) {
  const lengthSearchWord = search.length;

  let searchQuery = search;
  if (lengthSearchWord < 3) {
    searchQuery = "";
  }
  const {
    isLoading,
    data: recipes,
    error,
  } = useQuery({
    queryKey: [
      "recipes",
      searchQuery,
      diet,
      intolerances,
      type,
      number,
      offset,
    ],
    queryFn: () =>
      getRecipes(searchQuery, diet, intolerances, type, number, offset),
  });

  return { isLoading, error, recipes };
}
