import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Jost as FontJost,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontJost = FontJost({
  subsets: ["latin"],
  variable: "--font-jost",
});
