// src/app/fonts.js
import { Boldonse, Bricolage_Grotesque, Space_Grotesk } from "next/font/google";

export const boldonse = Boldonse({
  subsets: ["latin"],
  variable: "--font-boldonse",
  adjustFontFallback: false,
  weight: "400",
  display: "swap",
});

export const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
