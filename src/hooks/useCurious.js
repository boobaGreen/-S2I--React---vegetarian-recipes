// custom hook to manage the query for a new Curiosity

import { useQuery } from "@tanstack/react-query";
import { getCurious } from "../services/apiCurious";

export function useCurious(uid) {
  const {
    isLoading,
    data: curious,
    error,
  } = useQuery({
    queryKey: ["curious", uid],
    queryFn: () => getCurious(),
  });

  return { isLoading, error, curious };
}
