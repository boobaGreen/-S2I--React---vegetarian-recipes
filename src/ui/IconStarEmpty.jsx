import { AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { styled } from "styled-components";
import { useState } from "react";

const StyledEmptyStar = styled.div``;
function IconStarEmpty({ color }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <StyledEmptyStar>
      <IconContext.Provider
        value={{
          color: `${color}`,
          className: "global-class-name",
          size: isHover ? "2.2em" : "1.9em",
        }}
      >
        <AiOutlineStar
          style={{
            marginTop: "1rem",
            marginLeft: "0.6rem",
            cursor: "pointer",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </IconContext.Provider>
    </StyledEmptyStar>
  );
}

export default IconStarEmpty;
