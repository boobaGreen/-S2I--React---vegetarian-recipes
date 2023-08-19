import styled from "styled-components";
export const StyledPageNotFound = styled.main`
  max-width: 80%;
  margin: 3rem;
  max-height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  /* box */

  background-image: url("/paper.jpg");
  border: 5px solid var(--color-my-back);
  border-radius: var(--border-radius-md);
  color: var(--color-green-fix);

  padding: 3rem;
  flex: 0 1 96rem;
  text-align: center;
  margin: 2rem;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
