import { Inter, Rubik, Josefin_Sans, Bree_Serif } from "next/font/google";

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
  weight: ["400"], // Bree Serif has only one weight
  variable: "--font-bree",
});
