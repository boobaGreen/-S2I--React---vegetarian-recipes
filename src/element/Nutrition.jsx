import Pie from "./Pie";
import Heading from "../ui/Heading";
import { useMediaQuery } from "react-responsive";

function Nutrition({ dataPieNutrient, dataPieCalories }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  const styleHeader = {
    marginBottom: "2rem",
    fontSize: "4rem",
    color: "#184d19",
  };

  const styledHeaderMini = {
    marginBottom: "1rem",
    fontSize: "3.2rem",
    color: "#184d19",
  };
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
        border: "solid 0.5rem var(--color-my-700)",
        width: "95%",
      }}
    >
      <Heading as="h1" style={styleIf}>
        🧪 Nutrition
      </Heading>
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
    </div>
  );
}

export default Nutrition;
