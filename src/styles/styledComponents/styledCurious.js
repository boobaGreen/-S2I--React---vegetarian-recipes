import { styled } from "styled-components";

const StyledTitle = styled.div`
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  border-radius: 1rem;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;
  color: #d23;
  border: 0.5rem double #d23;
  transform: rotate(3deg);
  -webkit-mask-position: 2rem 3rem;
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;
const StyledSpeechBubble = styled.main`
  color: var(--color-my-logo);
  background: #efefef;
  border-radius: 4px;
  font-size: 1.4rem;
  line-height: 1.3;
  margin: 0 auto 40px;
  max-width: 600px;
  padding: 15px;
  position: relative;

  p {
    margin: 0 0 10px;

    :last-of-type {
      margin-bottom: 0;
    }
  }

  &::after {
    border-left: 20px solid transparent;
    border-top: 20px solid #efefef;
    bottom: -20px;
    content: "";
    position: absolute;
    right: 20px;
  }
`;
const StyledCuriousPage = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 80%;
  background-image: url("/paper.jpg");
  border-radius: var(--border-radius-md);
  border: solid 0.5rem var(--color-my-back);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  @media (min-width: 800px) {
    width: 50%;
  }

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const buttonStyle = {
  maxWidth: "3rem",
  cursor: "pointer",
  color: "var(--color-my-pen)",
  backgroundColor: "var(--color-my-back)",
  padding: "0.25rem 0.5rem",
  marginLeft: "1rem",
  marginBottom: "1rem",
  borderRadius: "40px",
};

export {
  Box,
  StyledCuriousPage,
  StyledSpeechBubble,
  StyledTitle,
  buttonStyle,
  StyledDiv,
};
