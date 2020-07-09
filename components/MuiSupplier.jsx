import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import muiTheme from "../utils/muiTheme";
import { GlobalStyles } from "../utils/globalStyles";

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
