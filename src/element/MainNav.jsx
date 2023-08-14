import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineFaceSmile,
} from "react-icons/hi2";

const NavList = styled.ul`
  background-color: var(--color-my-700);
  border: solid 0.5rem white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 6rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    color: var(--color-pen-700);
    font-size: 1.4rem;
    font-weight: 500;

    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-pen--700);
    background-color: var(--color-nav-hover);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

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
          <StyledNavLink to="/joke" style={styleIf}>
            <HiOutlineFaceSmile />
            {isDesktopOrLaptop ? <span>Joke</span> : null}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/curious" style={styleIf}>
            <HiOutlineGift />
            {isDesktopOrLaptop ? <span>Curiousity</span> : null}
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
