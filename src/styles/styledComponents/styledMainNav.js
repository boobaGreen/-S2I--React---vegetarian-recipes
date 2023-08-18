import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const NavList = styled.ul`
  background-color: var(--color-my-back);
  border: solid 0.5rem white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 6rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    color: var(--color-my-pen);
    font-size: 1.4rem;
    font-weight: 500;

    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-my-pen);
    background-color: var(--color-nav-hover);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-my-pen);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-my-pen);
  }
`;
