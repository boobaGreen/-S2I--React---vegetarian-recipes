import { styled } from "styled-components";

const StyledCardContainer = styled.ul`
  overflow: hidden;
  display: flex;
  padding: 1rem;
  height: 30rem;
  width: 100%;

  // media query for card views "column"
  @media (min-width: 800px) {
    width: 50%;
  }
  @media (min-width: 1400px) {
    width: 33.3333%;
  }
`;
const StyledSpan = styled.span`
  display: inline-block;
  cursor: pointer;
  color: var(--color-my-back);
  font-size: 2.5rem;
  &:hover {
    outline: none;
    transform: translateY(-3px);
  }
  &:active {
    outline: none;
    transform: translateX(+6px);
  }
`;
const StyledCard = styled.li`
  background-image: url("/paper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: var(--shadow-lg);
  border: solid 0.5rem var(--color-my-back);
  display: flex;
  padding: 1rem;
  width: 100%;
  gap: 3%;
  background-color: var(--color-my-back);
  border-radius: 4rem;
`;
const StyledBlock = styled.div`
  display: flex;
  flex-grow: 1;

  border-radius: 3rem;
`;
const StyledButton = styled.button`
  color: var(--color-my-pen);
  background-color: var(--color-my-back);
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    outline: none;
    background-color: var(--color-nav-hover);
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
const StyledDiv = styled.div``;
const StyledImgBlock = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 3rem;
  width: 45%;
  border-radius: 2rem;
  border: solid 0.25rem var(--color-my-back);
`;
const StyledInfoPics = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;
const StyledInfoBlock = styled.div`
  width: 50%;
`;
const StyledBlockInfo2 = styled.div`
  display: flex;
  flex-grow: 1;

  border-radius: 3rem;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-left: 5px;
  cursor: pointer;
`;
const StyledBlockTimer = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 3rem;
  flex-direction: "column";
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
const StyledBlockPrice = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export {
  StyledCardContainer,
  StyledSpan,
  StyledCard,
  StyledBlock,
  StyledButton,
  StyledDiv,
  StyledImgBlock,
  StyledInfoPics,
  StyledInfoBlock,
  StyledBlockInfo2,
  StyledBlockTimer,
  StyledBlockPrice,
};
