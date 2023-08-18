import { useDarkMode } from "../contexts/DarkModeContext";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { StyledBtn } from "../styles/styledComponents/styledDarkmode";

import Row from "../ui/Row";

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
