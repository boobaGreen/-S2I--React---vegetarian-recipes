import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

import { useState } from "react";

function IconStarFull({ color, clickHandle }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <IconContext.Provider
      value={{
        color: `${color}`,
        className: "global-class-name",
        size: isHover ? "2.2em" : "1.9em",
      }}
    >
      <AiFillStar
        style={{
          marginTop: "1rem",
          marginLeft: "0.6rem",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </IconContext.Provider>
  );
}

export default IconStarFull;
