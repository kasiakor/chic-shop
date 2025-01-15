import "./spinner.styles.js";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles.js";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
