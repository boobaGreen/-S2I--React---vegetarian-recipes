import { styled } from "styled-components";

import { devices } from "../../const/constants";

export const StyledIngredients = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 5rem;
  background-image: url("/paper.jpg");
  width: 100%;
  border: solid 0.5rem var(--color-my-back);
  margin-right: 2rem;
  @media (${devices.sm}) {
    width: 100%;
  }
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
export const styledSpanMini = {
  fontSize: "1.0rem",
  color: "var(--color-green-fix)",
};
export const styledSpan = {
  fontSize: "1.8rem",
  color: "var(--color-green-fix)",
};
