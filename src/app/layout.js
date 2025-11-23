import "./globals.css";
import { inter, rubik, josefin, bree } from "./fonts.js";
export const metadata = {
  title: "Dhananjay R",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${inter.variable}
    ${josefin.variable} ${bree.variable}`}
    >
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
