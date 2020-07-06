import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import muiTheme from "../utils/muiTheme";

export default ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
