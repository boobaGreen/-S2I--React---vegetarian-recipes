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
