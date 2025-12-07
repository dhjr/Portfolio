// src/app/fonts.js
import {
  EB_Garamond,
  Josefin_Sans,
  Cormorant,
  Cormorant_Upright,
  Cinzel,
  Instrument_Serif,
  Gruppo,
  Forum,
  League_Gothic,
  New_Amsterdam,
  Truculenta,
  Boldonse,
  spaceGrotesk,
  Space_Grotesk,
} from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
  display: "swap",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: "400",

  variable: "--font-cormorantupright",
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrumentserif",
  weight: "400",

  display: "swap",
});

export const gruppo = Gruppo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gruppo",
  display: "swap",
});

export const forum = Forum({
  subsets: ["latin"],
  weight: "400",

  variable: "--font-forum",
  display: "swap",
});

export const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-leaguegothic",
  display: "swap",
});

export const newAmsterdam = New_Amsterdam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-newamsterdam",
  display: "swap",
});

export const trunculenta = Truculenta({
  subsets: ["latin"],
  variable: "--font-trunculenta",
  display: "swap",
});

export const boldonse = Boldonse({
  subsets: ["latin"],
  variable: "--font-boldonse",
  weight: "400",
  display: "swap",
});

export const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
  display: "swap",
});
