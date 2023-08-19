import { useMoveHome } from "../hooks/useMoveHome";

import Heading from "../ui/Heading";
import Button from "../ui/Button";

import {
  Box,
  StyledPageNotFound,
} from "../styles/styledComponents/styledError";
function Error() {
  const moveHome = useMoveHome();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">There was an error , please try again ... 😢</Heading>
        <Button onClick={moveHome} size="large">
          &larr; Home
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default Error;
