import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import LogoMini from "./LogoMini";
import Social from "../element/Social";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  gap: 3.2rem;
`;

function Sidebar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <StyledSidebar>
      {isDesktopOrLaptop ? <Logo /> : <LogoMini />}
      <MainNav />
      <Social />
    </StyledSidebar>
  );
}

export default Sidebar;
