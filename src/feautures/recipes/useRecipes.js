import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";

export function useRecipes(
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
      maxReadyTime,
      sort,
      direction,
    ],
    queryFn: () =>
      getRecipes(
        searchQuery,
        diet,
        intolerances,
        type,
        number,
        offset,
        maxReadyTime,
        sort,
        direction
      ),
  });

  return { isLoading, error, recipes };
}
