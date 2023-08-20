import { useMediaQuery } from "react-responsive";

import {
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineFaceSmile,
} from "react-icons/hi2";

import {
  NavList,
  StyledNavLink,
} from "../styles/styledComponents/styledMainNav";

function MainNav() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "screen and (min-width: 1024px)",
  });
  const styleIf = {
    padding: !isDesktopOrLaptop ? "1.2rem 1.2rem" : "1.2rem 2.4rem",
  };

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/recipes" style={styleIf}>
            <HiOutlineMagnifyingGlass />
            {isDesktopOrLaptop ? <span>Search</span> : null}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favourite" style={styleIf}>
            <HiOutlineHeart />
            {isDesktopOrLaptop ? <span>Favorites</span> : null}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/curious" style={styleIf}>
            <HiOutlineGift />
            {isDesktopOrLaptop ? <span>Curiousity</span> : null}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/joke" style={styleIf}>
            <HiOutlineFaceSmile />
            {isDesktopOrLaptop ? <span>Joke</span> : null}
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
