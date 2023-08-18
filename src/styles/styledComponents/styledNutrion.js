import styled from "styled-components";

export const StyleNutry = styled.div`
  background-image: url("/paper.jpg");
  border-radius: 4rem;
  padding: 2rem;
  border: solid 0.5rem var(--color-my-back);
  width: 88%;
  margin: 0rem 2rem 2rem 2rem;
`;

export const StyledGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    margin-left: auto;
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
