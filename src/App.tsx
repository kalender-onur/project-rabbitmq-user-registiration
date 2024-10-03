import { useTheme, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./router";
import queryClient from "./hooks";

function App() {
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
