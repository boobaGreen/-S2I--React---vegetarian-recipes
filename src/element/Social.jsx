import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaRegEnvelope } from "react-icons/fa";
import { styled } from "styled-components";
const StyledSocial = styled.div`
  margin-top: 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const StyledLinkedin = styled.a`
  border-radius: 100px;
  transition: transform 250ms;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
  }
`;
const StyledGithub = styled.a`
  border-radius: 100%;
  transition: transform 250ms;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
  }
`;
const StyledMail = styled.a`
  border-radius: 100%;
  color: #171515;
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
  }
`;
function Social() {
  return (
    <StyledSocial>
      <StyledLinkedin href="https://www.linkedin.com/in/claudio-dall-ara-244816175/">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          color={"#0e76a8"}
          style={{ backgroundColor: "white" }}
        />
      </StyledLinkedin>
      <StyledGithub href="https://github.com/boobaGreen">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          color={"#171515"}
          style={{ backgroundColor: "white" }}
        />
      </StyledGithub>
      <StyledMail href="mailto:claudiodallara77@gmail.com">
        <FaRegEnvelope size={"3rem"} style={{ backgroundColor: "white" }} />
      </StyledMail>
    </StyledSocial>
  );
}

export default Social;
