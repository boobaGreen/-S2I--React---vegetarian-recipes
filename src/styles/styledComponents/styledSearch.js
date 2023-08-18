import { styled } from "styled-components";
import { devices } from "../../const/constants";

export const StyledSearch = styled.input`
  width: 20rem;
  cursor: pointer;
  justify-self: center;
  border: solid 0.5rem white;
  padding: 1.1rem 1.6rem;
  font-size: 1.4rem;
  border-radius: 100px;
  transition: all 0.3s;
  color: var(--color-my-pen);
  background-color: var(--color-my-back);
  @media ${devices.md} {
    width: 40rem;
    font-size: 1.6rem;
  }
  @media ${devices.lg} {
    width: 60rem;
    font-size: 1.8rem;
  }
  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    background-color: var(--color-nav-hover);
  }
`;
