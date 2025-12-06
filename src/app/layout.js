// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/navBar";
import { ReactLenis } from "lenis/react"; // <--- NEW IMPORT PATH
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
  spacegrotesk,
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
        ${spacegrotesk.variable}

      `}
    >
      <body className="antialiased ">
        <ReactLenis
          root
          options={{ lerp: 0.1, duration: 0.35, smoothTouch: true }}
        >
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
