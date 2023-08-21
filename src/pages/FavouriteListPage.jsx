import { useLocalStorageState } from "../hooks/useLocalStorageState";

import Card from "../components/Card";
import FavPageNotFound from "./FavPageNotFound";

import { StyledRecipeList } from "../styles/styledComponents/styledFav";

// use local storage object to save the favourite list

function FavouriteListPage() {
  const [favouriteList, setFavouriteList] = useLocalStorageState(
    [],
    "favouriteList"
  );

  const favListLength = favouriteList.length;

  function handleDeleteRecipe(idToDelete) {
    setFavouriteList((favouriteList) =>
      favouriteList.filter((recipe) => recipe.id !== idToDelete)
    );
  }

  return (
    <>
      {favListLength ? (
        <StyledRecipeList>
          {favouriteList.map((recipe) => (
            <Card
              recipe={recipe}
              key={recipe.id}
              favouriteList={favouriteList}
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

export default FavouriteListPage;
