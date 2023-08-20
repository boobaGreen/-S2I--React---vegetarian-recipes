import { styled } from "styled-components";

export const styledHeader = {
  fontSize: "4rem",
  color: "var(--color-green-fix)",
};

export const styledHeaderMini = {
  fontSize: "3.2rem",
  color: "var(--color-green-fix)",
};

export const PrimaryDiv = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  background-image: url("/paper.jpg");
  border-radius: 3rem;
  /* padding: 2rem; */
  color: var(--color-green-fix);
  border: solid 0.5rem var(--color-my-back);
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  height: 10rem;
  gap: 2rem;
  color: var(--color-green-fix);
`;
