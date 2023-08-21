import { useRecipes } from "../hooks/useRecipes";
import { useQueryCust } from "../contexts/QueryContext";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import Card from "../components/Card";
import Spinner from "../ui/Spinner";
import Error from "./Error";

import { StyledRecipeList } from "../styles/styledComponents/styledRecipeList";
//
function RecipesPage() {
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
  // useQueryCustom is a custom hook ( contec api ) where are located the filter and principal search word variabile
  // useRecipes is a custom hook to make the react query request for the recipes list to display
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

  // local storage custom hook to manage the favouritee list
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

export default RecipesPage;
