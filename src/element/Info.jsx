import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";

import { LuMilkOff } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";

function Info({
  vegan,
  dairyFree,
  glutenFree,
  readyInMinutes,
  servings,
  pricePerServing,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          marginLeft: "3rem",
          height: "10rem",
          gap: "2.5rem",
        }}
      >
        <p>{vegan ? <IconVegan /> : null}</p>
        <p>{glutenFree ? <IconGlutenFree /> : null}</p>
        <div style={{ color: "#059669" }}>
          {dairyFree ? <LuMilkOff style={{ fontSize: "4.5rem" }} /> : null}
        </div>
      </div>
      <p style={{ color: "#059669" }}>
        <IconTimer />
        <span style={{ marginLeft: "1.5rem" }}>{readyInMinutes}min</span>
      </p>
      <p style={{ color: "#059669", margin: "3rem" }}>
        <IconMoney />
        <span style={{ marginLeft: "1.5rem" }}>
          {" "}
          {pricePerServing < 5
            ? "0.05$"
            : `${(pricePerServing / 100).toFixed(2)}$`}
        </span>
      </p>

      <p
        style={{ color: "#059669", marginRight: "3rem", marginLeft: "1.5rem" }}
      >
        <HiOutlineUserGroup style={{ fontSize: "4.5rem" }} />
        <span style={{ marginLeft: "1.5rem" }}>{servings}</span>
      </p>
    </div>
  );
}

export default Info;
