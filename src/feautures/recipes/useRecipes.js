import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";

export function useRecipes(search, diet, intolerances, type, number, offset) {
  const {
    isLoading,
    data: recipes,
    error,
  } = useQuery({
    queryKey: ["recipes", search, diet, intolerances, type, number, offset],
    queryFn: () => getRecipes(search, diet, intolerances, type, number, offset),
  });

  return { isLoading, error, recipes };
}
