import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";

import { LuMilkOff } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Heading from "../ui/Heading";

function Info({
  vegan,
  dairyFree,
  glutenFree,
  readyInMinutes,
  servings,
  pricePerServing,
}) {
  const badge = vegan || glutenFree || dairyFree;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/paper.jpg",
        width: "max-content",
        borderRadius: "3rem",
        padding: "4rem",
        color: "#184d19",
      }}
    >
      <Heading as="h1" style={{ fontSize: "4rem", color: "#184d19" }}>
        ℹ️ Info
      </Heading>
      {badge ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
            // marginLeft: "3rem",
            height: "10rem",
            gap: "2rem",
            color: "#184d19",
          }}
        >
          <p>{vegan ? <IconVegan /> : null}</p>
          <p>{glutenFree ? <IconGlutenFree /> : null}</p>
          <div style={{ color: "#184d19" }}>
            {dairyFree ? (
              <LuMilkOff style={{ fontSize: "4.5rem", color: "#184d19" }} />
            ) : null}
          </div>
        </div>
      ) : null}
      <p style={{ marginTop: "1.8rem" }}>
        <IconTimer style={{ color: "#184d19", margin: "3rem" }} />
        <span style={{ marginLeft: "1.5rem", color: "#184d19" }}>
          {readyInMinutes}min
        </span>
      </p>
      <p style={{ color: "#184d19", margin: "3rem" }}>
        <IconMoney />
        <span style={{ marginLeft: "1.5rem", color: "#184d19" }}>
          {pricePerServing < 5
            ? "0.05$"
            : `${(pricePerServing / 100).toFixed(2)}$`}
        </span>
      </p>
      <p
        style={{ color: "#184d19", marginRight: "3rem", marginLeft: "1.5rem" }}
      >
        <HiOutlineUserGroup
          style={{ marginRight: "2rem", fontSize: "4.5rem", color: "#184d19" }}
        />
        <span style={{ marginLeft: "1rem", color: "#184d19" }}>{servings}</span>
      </p>
    </div>
  );
}

export default Info;
