import { createTheme, ThemeProvider } from "@material-ui/core";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    blue: {
      // Purple and green play nicely together.
      main: "#0288d1",
    },
    green: {
      // This is green.A700 as hex.
      main: "#388e3c",
    },
    red: {
      main: "#d32f2f",
    },
    orange: {
      main: "#f57c00",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
