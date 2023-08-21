import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  ButtonStyled,
  styledHeaderMini,
  PrincipalDiv,
  SecondDiv,
  DisableButton,
  styleHeader,
} from "../styles/styledComponents/styledIstructions";

import Heading from "../ui/Heading";

function Istructions({ istructionsArray }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  const [index, setIndex] = useState(0);
  const length = istructionsArray?.length;

  const step = istructionsArray[index]?.step;
  let nextPageExist = index < length - 1;
  let prevPageExist = index > 0;
  function handlePrevClick() {
    setIndex((index) => index - 1);
  }
  function handleNextClick() {
    setIndex((index) => index + 1);
  }
  if (length < 1) return null;

  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <PrincipalDiv>
      <Heading as="h1" style={styleIf}>
        {!isLittle ? <span>Instructions</span> : <span>Steps</span>}
      </Heading>
      <SecondDiv>
        {prevPageExist ? (
          <ButtonStyled onClick={handlePrevClick}>
            {!isLittle ? <span>Step {index}</span> : null} &lt;
          </ButtonStyled>
        ) : (
          <DisableButton
            style={{
              disable: "true",
            }}
            /*disable button is for mantain space in html dom*/
          >
            {!isLittle ? <span>Step {index}</span> : null} &lt; /
          </DisableButton>
          /*disable button is for mantain space in html dom*/
        )}
        <span>
          <span style={{ fontSize: "6rem" }}>🍳</span>
        </span>

        {nextPageExist ? (
          <ButtonStyled onClick={handleNextClick}>
            &gt;
            {!isLittle ? <span> {index + 2} Step</span> : null}
          </ButtonStyled>
        ) : (
          /*disable button is for mantain space in html dom*/
          <DisableButton>Step s s</DisableButton>
        )}
      </SecondDiv>
      <p style={{ color: "var(--color-green-fix)", fontSize: "1.5rem" }}>
        <span> - Step N.{index + 1} - </span>
        <span>{step}</span>
      </p>
    </PrincipalDiv>
  );
}

export default Istructions;
