import { useState } from "react";
import Heading from "../ui/Heading";
function Istructions({ istructionsArray }) {
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

  return (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
      }}
    >
      <Heading as="h1" style={{ fontSize: "4rem" }}>
        Instructions
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
          <button
            style={{
              color: "var(color-pen-700)",
              backgroundColor: "var(--color-my-700)",
              padding: "1rem",
              borderRadius: "10px",
            }}
            onClick={handlePrevClick}
          >
            Step {index} &lt;
          </button>
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
          <button
            style={{
              color: "var(color-pen-700)",
              backgroundColor: "var(--color-my-700)",
              padding: "1rem",
              borderRadius: "10px",
            }}
            onClick={handleNextClick}
          >
            &gt; {index + 2} Step
          </button>
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
      <p>
        <span> - Step N.{index + 1} - </span> <span>{step}</span>
      </p>
    </div>
  );
}

export default Istructions;
