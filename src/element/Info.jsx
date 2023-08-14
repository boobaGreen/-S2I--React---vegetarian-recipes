import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";

import { LuMilkOff } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Heading from "../ui/Heading";
import { useMediaQuery } from "react-responsive";
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
function Info({
  vegan,
  dairyFree,
  glutenFree,
  readyInMinutes,
  servings,
  pricePerServing,
}) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  const badge = vegan || glutenFree || dairyFree;
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/paper.jpg",
        borderRadius: "3rem",
        padding: "4rem",
        color: "#184d19",
        border: "solid 0.5rem var(--color-my-700)",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      <Heading as="h1" style={styleIf}>
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
          <p>{vegan ? <IconVegan dim={48} /> : null}</p>
          <p>{glutenFree ? <IconGlutenFree dim={48} /> : null}</p>
          <div style={{ color: "#184d19" }}>
            {dairyFree ? (
              <LuMilkOff style={{ fontSize: "4.5rem", color: "#184d19" }} />
            ) : null}
          </div>
        </div>
      ) : null}
      <p style={{ marginTop: "1.8rem" }}>
        <IconTimer dim={48} style={{ color: "#184d19", margin: "3rem" }} />
        <span style={{ marginLeft: "1.5rem", color: "#184d19" }}>
          {readyInMinutes}min
        </span>
      </p>
      <p style={{ color: "#184d19", margin: "3rem" }}>
        <IconMoney dim={48} />
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
