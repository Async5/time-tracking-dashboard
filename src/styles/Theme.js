import { ThemeProvider } from "styled-components";

import theme from "../themes/defaults";
import GlobalStyles from "./GlobalStyles";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
