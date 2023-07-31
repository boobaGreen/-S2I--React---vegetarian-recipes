import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../contexts/DarkModeContext";
import Row from "./Row";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Row type="horizontal" justify="space-bt">
          <HiOutlineSun />
        </Row>
      ) : (
        <Row type="horizontal" justify="space-bt">
          <HiOutlineMoon />
        </Row>
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
