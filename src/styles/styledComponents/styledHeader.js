import { styled } from "styled-components";

export const StyledMini = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  background-image: url("/paper.jpg");
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;

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
export const StyledTitle = styled.div`
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: var(--color-my-logo);
  border: 0.5rem solid var(--color-my-back);
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-3deg);
  border-radius: 0;
`;
export const StyledTitleMini = styled.div`
  height: auto;
  font-size: 2rem;
  font-weight: 600;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: var(--color-my-logo);
  border: 0.2rem solid var(--color-my-logo);
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-1deg);
  border-radius: 0;
`;
