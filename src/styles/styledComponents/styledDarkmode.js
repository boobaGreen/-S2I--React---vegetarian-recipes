import { styled } from "styled-components";

export const StyledBtn = styled.button`
  font-size: 1.8rem;
  color: var(--color-my-pen);
  height: auto;
  width: auto;
  background-color: var(--color-my-back);
  padding: 5px 10px;
  border-radius: 100%;
  &:hover {
    outline: none;
    background-color: var(--color-nav-hover);
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
