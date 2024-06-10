import type { AppProps } from "next/app";
import { light } from "../scss/MaterialTheme/index";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "../scss/app.scss";
import "../scss/pc/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  // console.log("App COMPONENT - PAGES ROUTER");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
