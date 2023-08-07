import { useState } from "react";
import Heading from "../ui/Heading";
function Istructions({ istructionsArray }) {
  const [index, setIndex] = useState(0);
  const length = istructionsArray.length;

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
    <div>
      <Heading style={{ fontSize: "6rem" }}></Heading>
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
              backgroundColor: "#10B981",
              padding: "1rem",
              borderRadius: "10px",
            }}
            onClick={handlePrevClick}
          >
            step {index}
          </button>
        ) : null}
        <span>
          <span style={{ fontSize: "6rem" }}>🍳</span>
        </span>

        {nextPageExist ? (
          <button
            style={{
              backgroundColor: "#10B981",
              padding: "1rem",
              borderRadius: "10px",
            }}
            onClick={handleNextClick}
          >
            step {index + 2}
          </button>
        ) : null}
      </div>
      <p>
        <span>{step}</span>
      </p>
    </div>
  );
}

export default Istructions;
