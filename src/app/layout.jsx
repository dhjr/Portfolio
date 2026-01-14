// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/customComponents/NavBar";
import ScrollToTop from "@/components/customComponents/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/customComponents/ThemeProvider";
import { boldonse, spacegrotesk, bricolage } from "./fonts";

const siteUrl = "https://dhananjayr.com"; // Update this with your actual production URL

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhananjay R | Full Stack Developer",
    template: "%s | Dhananjay R",
  },
  description:
    "Hey! I'm Dhananjay R, an aspiring Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.",
  keywords: [
    "Dhananjay R",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Software Engineer",
  ],
  authors: [{ name: "Dhananjay R" }],
  creator: "Dhananjay R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dhananjay R | Full Stack Developer",
    description:
      "Hey! I'm Dhananjay R, an aspiring Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.",
    siteName: "Dhananjay R Portfolio",
    images: [
      {
        url: "/profile1.png",
        width: 1200,
        height: 630,
        alt: "Dhananjay R - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhananjay R | Full Stack Developer",
    description:
      "Hey! I'm Dhananjay R, an aspiring Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.",
    images: ["/profile1.png"],
    creator: "@dhananjayr", // Update with actual twitter handle if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};
export default function RootLayout({ children }) {
  // Define your JSON-LD data object outside for better readability
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhananjay R",
    url: siteUrl,
    image: `${siteUrl}/profile1.png`,
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/dhjr",
      "https://linkedin.com/in/dhananjayr", // Update with your actual URL
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government Engineering College, Kottayam",
    },
    description:
      "Aspiring Full Stack Developer and Machine Learning enthusiast focusing on performant web applications.",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${boldonse.variable} ${spacegrotesk.variable} ${bricolage.variable}`}
    >
      <body className="antialiased z-10">
        {/* 1. Place JSON-LD here, at the top of the body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 2. Then your Theme and UI providers */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ScrollToTop />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
