import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 100px;
  color: var(--color-my-pen);
  background-color: var(--color-my-back);
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: auto;
  padding: 0.5rem;
  cursor: "pointer";

  &:hover {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    background-color: var(--color-nav-hover);
  }
`;
export const ButtonNoClickStyled = styled.button`
  border-radius: 100px;
  color: var(--color-green-fix);

  background-color: white;
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: auto;
  padding: 0.5rem;
`;

export const principalDiv = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "1rem",
};
