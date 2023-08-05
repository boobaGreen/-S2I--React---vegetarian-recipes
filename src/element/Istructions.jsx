import { useState } from "react";

function Istructions({ istructionsArray }) {
  const [index, setIndex] = useState(0);
  const length = istructionsArray.length;
  const number = istructionsArray[index]?.number;
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
      <p>
        {prevPageExist ? <button onClick={handlePrevClick}>Prev</button> : null}
        <span>Step N :</span>
        <span>{number}</span>
        {nextPageExist ? <button onClick={handleNextClick}>Next</button> : null}
      </p>
      <p>
        <span>{step}</span>
      </p>
    </div>
  );
}

export default Istructions;
