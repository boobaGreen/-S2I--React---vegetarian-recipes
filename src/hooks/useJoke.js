import { useQuery } from "@tanstack/react-query";
import { getJoke } from "../services/apiJoke";

export function useJoke(uid) {
  const {
    isLoading,
    data: joke,
    error,
  } = useQuery({
    queryKey: ["joke", uid],
    queryFn: () => getJoke(),
  });
  return { isLoading, error, joke };
}
