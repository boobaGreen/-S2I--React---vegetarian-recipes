import { Tooltip } from "react-tooltip";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";

import { LuMilkOff } from "react-icons/lu";

import IconVegan from "../ui/IconVegan";
import IconGlutenFree from "../ui/IconGlutenFree";
import IconTimer from "../ui/IconTimer";
import IconMoney from "../ui/IconMoney";
import Heading from "../ui/Heading";

import {
  styledHeader,
  styledHeaderMini,
  PrimaryDiv,
  SecondDiv,
} from "../styles/styledComponents/styledInfo";
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

  const styleIf = isLittle ? styledHeaderMini : styledHeader;
  const badge = vegan || glutenFree || dairyFree;
  return (
    <PrimaryDiv>
      {/* Info Section in recipe detail page */}
      <Heading as="h1" style={styleIf}>
        ℹ️ Info
      </Heading>
      {badge ? (
        <SecondDiv>
          {/* First row of Info ( badge Vegan - Gluten Free - Dairy Free ) */}
          <p
            style={{ cursor: "pointer" }}
            data-tooltip-id="vegan-tooltip"
            data-tooltip-content="Vegan"
          >
            {vegan ? (
              <>
                <IconVegan dim={48} />{" "}
                <Tooltip id="vegan-tooltip" openOnClick={["click"]} />
              </>
            ) : null}
          </p>
          <p
            style={{ cursor: "pointer" }}
            data-tooltip-id="gluten-tooltip"
            data-tooltip-content="Gluten-Free"
          >
            {glutenFree ? (
              <>
                <IconGlutenFree dim={48} />
                <Tooltip id="gluten-tooltip" openOnClick={["click"]} />
              </>
            ) : null}
          </p>
          <div
            data-tooltip-id="dairy-tooltip"
            data-tooltip-content="Dairy-Free"
            style={{ color: "var(--color-green-fix)", curosr: "pointer" }}
          >
            {dairyFree ? (
              <>
                <LuMilkOff
                  style={{
                    fontSize: "4.5rem",
                    color: "var(--color-green-fix)",
                    cursor: "pointer",
                    strokeWidth: "1px",
                  }}
                />

                <Tooltip id="dairy-tooltip" openOnClick={["click"]} />
              </>
            ) : null}
          </div>
        </SecondDiv>
      ) : null}
      {/* Second Part of Info ( Timer , Price and Number of servings ) */}
      <p
        style={{ marginTop: "1.8rem", cursor: "pointer" }}
        data-tooltip-id="timer-tooltip"
        data-tooltip-content="Time for Preaparation & Cooking"
      >
        <IconTimer
          dim={48}
          style={{ color: "var(--color-green-fix)", margin: "3rem" }}
        />
        <span style={{ marginLeft: "1.5rem", color: "var(--color-green-fix)" }}>
          {readyInMinutes}min
        </span>
      </p>
      <Tooltip id="timer-tooltip" openOnClick={["click"]} />
      <p
        data-tooltip-id="price-tooltip"
        data-tooltip-content="Price per serving"
        style={{
          color: "var(--color-green-fix)",
          margin: "3rem",
          cursor: "pointer",
        }}
      >
        <IconMoney dim={48} />
        <span style={{ marginLeft: "1.5rem", color: "var(--color-green-fix)" }}>
          {pricePerServing < 5
            ? "0.05$"
            : `${(pricePerServing / 100).toFixed(2)}$`}
        </span>
      </p>
      <Tooltip id="price-tooltip" openOnClick={["click"]} />
      <p
        data-tooltip-id="serving-tooltip"
        data-tooltip-content="Serving Number"
        style={{
          color: "var(--color-green-fix)",
          marginRight: "3rem",
          marginLeft: "1.5rem",
          cursor: "pointer",
        }}
      >
        <HiOutlineUserGroup
          style={{
            marginRight: "2rem",
            fontSize: "4.5rem",
            color: "var(--color-green-fix)",
          }}
        />
        <span style={{ marginLeft: "1rem", color: "var(--color-green-fix)" }}>
          {servings}
        </span>
      </p>
      <Tooltip id="serving-tooltip" openOnClick={["click"]} />
    </PrimaryDiv>
  );
}

export default Info;
