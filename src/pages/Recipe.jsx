import { useParams } from "react-router-dom";
import { useRecipe } from "../feautures/recipes/useRecipe";

import Error from "./Error";

function Recipe() {
  const { id: idCustom } = useParams();

  const { isLoading, recipe: data, error } = useRecipe(idCustom);
  if (isLoading) return null;
  if (error) return <Error />;
  console.log(data);
  return <h1>recipe n: {idCustom}</h1>;
}

export default Recipe;
