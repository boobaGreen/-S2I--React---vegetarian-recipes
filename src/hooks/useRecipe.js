// custom hook to manage the query for a recipe detail ( id it is it is necessary )

import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../services/apiRecipe";

export function useRecipe(id) {
  const {
    isLoading,
    data: recipe,
    error,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id),
  });

  return { isLoading, error, recipe };
}
