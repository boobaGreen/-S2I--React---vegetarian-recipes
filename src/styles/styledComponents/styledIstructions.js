import { styled } from "styled-components";

import { devices } from "../../const/constants";

export const ButtonStyled = styled.button`
  color: var(--color-my-pen);
  background-color: var(--color-my-back);
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    outline: none;
    background-color: var(--color-nav-hover);
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
export const PrincipalDiv = styled.div`
  background-image: url("/paper.jpg");
  border-radius: 4rem;
  padding: 2rem;
  border: solid 0.5rem var(--color-my-back);
  width: 95%;
  @media (${devices.sm}) {
    width: 98.3%;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
export const DisableButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  cursor: auto;
  visibility: hidden;
`;

export const styleHeader = {
  marginBottom: "2rem",
  fontSize: "4rem",
  color: "var(--color-green-fix)",
};

export const styledHeaderMini = {
  marginBottom: "1rem",
  fontSize: "3.2rem",
  color: "var(--color-green-fix)",
};
