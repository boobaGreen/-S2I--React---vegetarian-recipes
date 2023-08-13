import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  /* background-image: url(/wallBirgo.jpg); */
  text-align: center;
  padding: 1rem;
  height: 6rem;
  width: 6rem;
`;

const Img = styled.img``;

function LogoMini() {
  return (
    <Link to={`/`}>
      <StyledLogo>
        <Img src="/logo-light.png" alt="Logo" />
      </StyledLogo>
    </Link>
  );
}

export default LogoMini;
