import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { useDarkMode } from "../contexts/DarkModeContext";
import Row from "./Row";
import { styled } from "styled-components";
const StyledBtn = styled.button`
  font-size: 1.8rem;
  color: var(--color-pen-700);
  height: auto;
  width: auto;
  background-color: var(--color-my-700);
  padding: 5px 10px;
  border-radius: 100%;
`;
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledBtn onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Row type="horizontal" justify="space-bt">
          <HiOutlineSun />
        </Row>
      ) : (
        <Row type="horizontal" justify="space-bt">
          <HiOutlineMoon />
        </Row>
      )}
    </StyledBtn>
  );
}

export default DarkModeToggle;
