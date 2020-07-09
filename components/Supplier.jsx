import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "../utils/globalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import muiTheme from "../utils/muiTheme";

export default ({ children }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};
