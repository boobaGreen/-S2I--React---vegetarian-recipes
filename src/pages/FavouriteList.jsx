import Card from "../ui/Card";
import { styled } from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const StyledRecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  /* position: absolute;   */
`;

function SearchList() {
  const [favouriteList, setFavouriteList] = useLocalStorageState(
    [],
    "favouriteList"
  );
  function handleAddRecipe(recipe) {
    setFavouriteList((favouriteList) => [...favouriteList, recipe]);
  }

  function handleDeleteRecipe(recipeToDelete) {
    setFavouriteList((favouriteList) =>
      favouriteList.filter((recipe) => recipe.id !== recipeToDelete.id)
    );
  }

  // const recipes = data.results;

  return (
    <>
      <StyledRecipeList>
        {favouriteList.map((recipe) => (
          <Card
            recipe={recipe}
            key={recipe.id}
            favouriteList={favouriteList}
            handleAddRecipe={handleAddRecipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        ))}
      </StyledRecipeList>
    </>
  );
}

export default SearchList;
