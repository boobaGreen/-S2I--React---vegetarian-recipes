// page to display when favourite list is empty

import { useMoveBack } from "../hooks/useMoveBack";

import Heading from "../ui/Heading";
import Button from "../ui/Button";

import {
  StyledPageNotFound,
  Box,
} from "../styles/styledComponents/styledPageNotFound";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
