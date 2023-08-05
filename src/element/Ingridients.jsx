function Ingridients({ extendedIngredients }) {
  // const unitShort = measures.metric.unitShort;
  // const amount = measures.metric.amount;

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueIngredients = getUniqueListBy(extendedIngredients, "id");

  return (
    <div>
      {uniqueIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <p>
            <span>{ingredient.original}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Ingridients;

// const aisle = ingredient.aisle;
// const amountDescr = ingredient.amount;
// const recipeId = ingredient.id;
// const recipeImage = ingredient.image;
// const original = ingredient.original;
// const unitShort = ingredient.measures.metric.unitShort;
// const amount = ingredient.measures.metric.amount;
