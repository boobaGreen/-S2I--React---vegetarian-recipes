import { useState } from "react";
import Heading from "../ui/Heading";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";

const ButtonStyled = styled.button`
  color: var(--color-pen-700);
  background-color: var(--color-my-700);
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    outline: none;
    background-color: var(--color-nav-hover);
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
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
  const styleHeader = {
    marginBottom: "2rem",
    fontSize: "4rem",
    color: "var(--color-green-fix)",
  };

  const styledHeaderMini = {
    marginBottom: "1rem",
    fontSize: "3.2rem",
    color: "var(--color-green-fix)",
  };
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
        border: "solid 0.5rem var(--color-my-700)",
        maxWidth: "95%",
        margin: "0rem 2rem",
      }}
    >
      <Heading as="h1" style={styleIf}>
        {!isLittle ? <span>Instructions</span> : <span>Steps</span>}
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {prevPageExist ? (
          <ButtonStyled onClick={handlePrevClick}>
            {!isLittle ? <span>Step {index}</span> : null} &lt;
          </ButtonStyled>
        ) : (
          <button
            style={{
              padding: "1rem",
              borderRadius: "10px",
              disable: "true",
              cursor: "auto",
              visibility: "hidden",
            }}
          >
            Step s s
          </button>
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
          <button
            style={{
              padding: "1rem",
              borderRadius: "10px",
              disable: "true",
              cursor: "auto",
              visibility: "hidden",
            }}
          >
            Step s s
          </button>
        )}
      </div>
      <p style={{ color: "var(--color-green-fix)" }}>
        <span> - Step N.{index + 1} - </span>
        <span>{step}</span>
      </p>
    </div>
  );
}

export default Istructions;
