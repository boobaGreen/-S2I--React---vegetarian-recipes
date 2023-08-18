import { styled } from "styled-components";

export const styledHeader = {
  marginBottom: "2rem",
  fontSize: "4rem",
  color: "var(--color-green-fix)",
};

export const styledHeaderMini = {
  marginBottom: "1rem",
  fontSize: "3.2rem",
  color: "var(--color-green-fix)",
};

export const PrimaryDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background-image: url("/paper.jpg");
  border-radius: 3rem;
  padding: 4rem;
  color: var(--color-green-fix);
  border: solid 0.5rem var(--color-my-back);
  margin-left: 2rem;
  margin-right: 2rem;
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
