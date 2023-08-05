function Nutrion({
  percentCarbs,
  percentFat,
  percentProtein,
  amountCalories,
  percentOfDailyNeedsCal,
}) {
  return (
    <>
      <div>
        <p>
          Carbohydrates % :<span>{percentCarbs}</span>
        </p>
        <p>
          Fat % :<span>{percentFat}</span>
        </p>
        <p>
          Proteins % :<span>{percentProtein}</span>
        </p>
      </div>
      <div>
        <p>
          Kcal :<span>{amountCalories}</span>
        </p>
        <p>
          % of Daily Needs Kcal:<span>{percentOfDailyNeedsCal}</span>
        </p>
      </div>
    </>
  );
}

export default Nutrion;
