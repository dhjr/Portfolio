import {
  Inter,
  Rubik,
  Josefin_Sans,
  Bree_Serif,
  EB_Garamond,
  Cormorant,
  Cinzel,
  Instrument_Serif,
  Gruppo,
  Forum,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree",
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], // Specify available weight

  variable: "--font-instrumentserif",
});

export const gruppo = Gruppo({
  subsets: ["latin"],
  weight: ["400"], // Specify available weight

  variable: "--font-gruppo",
});

export const forum = Forum({
  subsets: ["latin"],
  weight: ["400"], // Specify available weight
  variable: "--font-forum",
});
