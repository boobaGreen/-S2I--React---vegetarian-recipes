import Card from "../ui/Card";
import { styled } from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import FavPageNotFound from "./FavPageNotFound";

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

  const favListLength = favouriteList.length;

  return (
    <>
      {favListLength ? (
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
      ) : (
        <FavPageNotFound />
      )}
    </>
  );
}

export default SearchList;
