import { ThemeProvider } from "@mui/material";
import { NextUIProvider } from "@nextui-org/react";
import ErrorBoundary from "config/errorBoundary";
import SetAuthContextProvider from "contexts/setAuth.context";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { muiTheme, nextuiTheme } from "utils/theme.util";
import routes from "./routes/routes";
import "./themes/scss/App.scss";

function App() {
  const route = useRoutes(routes());
  return (
    <ErrorBoundary>
      <SetAuthContextProvider>
        <NextUIProvider theme={nextuiTheme}>
          <ThemeProvider theme={muiTheme}>
            <ToastContainer theme="colored" pauseOnFocusLoss={true} />
            <div className="App">{route}</div>
          </ThemeProvider>
        </NextUIProvider>
      </SetAuthContextProvider>
    </ErrorBoundary>
  );
}

export default App;
