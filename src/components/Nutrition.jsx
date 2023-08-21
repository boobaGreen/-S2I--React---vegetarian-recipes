import { useMediaQuery } from "react-responsive";

import Pie from "./Pie";
import Heading from "../ui/Heading";

import {
  styledHeaderMini,
  styleHeader,
  StyleNutry,
  StyledGraph,
} from "../styles/styledComponents/styledNutrion";

function Nutrition({ dataPieNutrient, dataPieCalories }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 820px)",
  });

  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <StyleNutry>
      <Heading as="h1" style={styleIf}>
        🧪 Nutrition
      </Heading>
      <StyledGraph>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pie
            data={dataPieCalories}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pie
            data={dataPieNutrient}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </StyledGraph>
    </StyleNutry>
  );
}

export default Nutrition;
