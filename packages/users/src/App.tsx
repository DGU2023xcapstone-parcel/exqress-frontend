import AppRouter from "./routes/AppRouter.js";
import GlobalStyle from "./style/globalStyle.js";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
