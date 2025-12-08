// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/customComponents/NavBar";
import { ReactLenis } from "lenis/react"; // <--- NEW IMPORT PATH
import ThemeProvider from "@/components/customComponents/ThemeProvider";
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
      suppressHydrationWarning
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
      <body className="antialiased z-10">
        <ReactLenis
          root
          options={{ lerp: 0.1, duration: 0.35, smoothTouch: true }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
