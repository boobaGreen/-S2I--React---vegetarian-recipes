import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Img = styled.img`
  height: 12rem;
  width: auto;
`;
// logo for desktop ( logo mini for mobile )
function Logo() {
  return (
    <Link to={`/`}>
      <StyledLogo>
        <Img src="/logo-light.png" alt="Logo" />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
