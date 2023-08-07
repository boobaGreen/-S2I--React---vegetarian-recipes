import Pie from "./Pie";
import Heading from "../ui/Heading";

function Nutrition({ dataPieNutrient, dataPieCalories }) {
  return (
    <>
      <Heading style={{ marginBottom: "4rem" }}>🧪 Nutrition</Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Pie
            data={dataPieCalories}
            options={{
              responsive: false,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div>
          <Pie
            data={dataPieNutrient}
            options={{ responsive: false, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </>
  );
}

export default Nutrition;
