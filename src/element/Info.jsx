function Info({
  vegan,
  dairyFree,
  glutenFree,
  healthScore,
  readyInMinutes,
  servings,
  pricePerServing,
}) {
  return (
    <div>
      <p>vegan: {vegan ? <span>TRUE</span> : <span>FALSE </span>}</p>
      <p>dairyFree: {dairyFree ? <span>TRUE</span> : <span>FALSE </span>}</p>
      <p>glutenFree: {glutenFree ? <span>TRUE</span> : <span>FALSE </span>}</p>
      <p>healthScore: {healthScore}</p>
      <p>readyInMinutes: {readyInMinutes}</p>
      {/* console.log(Math.trunc(13.37)); */}
      <p>pricePerServing: {Math.round(pricePerServing / 10)}</p>
      <p>servings: {servings}</p>
    </div>
  );
}

export default Info;
