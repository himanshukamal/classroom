import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono, fontJost } from "@/config/fonts";
// import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
// import { lightTheme, darkTheme } from "./config/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextUIProvider>
        <NextThemesProvider defaultTheme="light" attribute="class">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </ChakraProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  jost: fontJost.style.fontFamily,
};
