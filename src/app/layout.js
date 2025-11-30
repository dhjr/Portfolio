// src/app/layout.js
import "./globals.css";
import {
  ebGaramond,
  josefin,
  cormorant,
  cormorantUpright,
  cinzel,
  instrumentSerif,
  gruppo,
  forum,
  leagueGothic,
  newAmsterdam,
  trunculenta,
  boldonse,
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
        ${ebGaramond.variable}
        ${josefin.variable}
        ${cormorant.variable}
        ${cormorantUpright.variable}
        ${cinzel.variable}
        ${instrumentSerif.variable}
        ${gruppo.variable}
        ${forum.variable}
        ${leagueGothic.variable}
        ${newAmsterdam.variable}
        ${trunculenta.variable}
        ${boldonse.variable}

      `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
