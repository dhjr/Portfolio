import "./globals.css";
import {
  inter,
  rubik,
  josefin,
  bree,
  ebGaramond,
  cormorant,
  cinzel,
  instrumentSerif,
  gruppo,
  forum,
} from "./fonts";

export const metadata = {
  title: "Dhananjay R",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${rubik.variable} ${inter.variable} ${josefin.variable} ${bree.variable}
        ${ebGaramond.variable} ${cormorant.variable} ${cinzel.variable}
        ${instrumentSerif.variable} ${gruppo.variable} ${forum.variable}
      `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
