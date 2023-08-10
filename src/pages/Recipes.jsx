import Spinner from "../ui/Spinner";
import Error from "./Error";
import Card from "../ui/Card";
import { styled } from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../feautures/recipes/UseRecipes";

// import { useQueryCust } from "../contexts/QueryContext";

const StyledRecipeList = styled.ul`

  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  /* position: absolute;   */
`;

function Recipes() {
  const {
    search,
    diet,
    intolerances,
    type,
    number,
    offset,
    maxReadyTime,
    sort,
    direction,
  } = useQueryCust();

  const {
    isLoading,
    recipes: data,
    error,
  } = useRecipes(
    search,
    diet,
    intolerances,
    type,
    number,
    offset,
    maxReadyTime,
    sort,
    direction
  );

  const [favouriteList, setFavouriteList] = useLocalStorageState(
    [],
    "favouriteList"
  );
  function handleAddRecipe(recipe) {
    setFavouriteList((favouriteList) => [...favouriteList, recipe]);
  }

  function handleDeleteRecipe(idPass) {
    setFavouriteList((favouriteList) =>
      favouriteList.filter((recipe) => recipe.id !== idPass)
    );
  }
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  const recipes = data.results;

  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <Card
          recipe={recipe}
          key={recipe.id}
          favouriteList={favouriteList}
          handleAddRecipe={handleAddRecipe}
          handleDeleteRecipe={handleDeleteRecipe}
        />
      ))}
    </StyledRecipeList>
  );
}

export default Recipes;
