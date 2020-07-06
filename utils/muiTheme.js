import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: [
        "Jost",
        "Helvetica",
        "Futura",
        "Helvetica Neue",
        "Segoe UI",
        "Roboto",
        "Arial",
        "sans-serif",
      ].join(","),
      color: "#273849",
      letterSpacing: "1px",
    },
  },

  palette: {
    primary: {
      main: "#4FC08D",
    },
    background: {
      default: "#FAFAFA",
    },
  },

  overrides: {
    MuiTabs: {
      flexContainer: {
        color: "#273849",
      },
    },
    MuiBottomNavigation: {
      root: {
        borderTop: "1px solid #ddd",
      },
    },
    MuiBottomNavigationAction: {
      label: {
        fontFamily: ["Sen", "sans-serif"].join(","),
        fontSize: 13,
      },
    },
  },
});
