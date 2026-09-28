import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const socialTitle = "Carmelo Jules Marilag — Software QA Engineer & Speaker";
const socialDescription = "Careful testing. Confident releases. Explore my projects, QA experience, and speaking engagements.";
const socialImage = "https://melojules.github.io/portfolio/social-preview-v1.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://melojules.github.io/portfolio/"),
  openGraph: {
    type: "website",
    url: "https://melojules.github.io/portfolio/",
    title: socialTitle,
    description: socialDescription,
    images: [{ url: socialImage, width: 1200, height: 630, type: "image/png", alt: "Carmelo Jules Marilag — Software QA Engineer & Speaker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
  title: "Carmelo Jules Marilag â€” Software QA Engineer",
  description:
    "Portfolio of Carmelo Jules Marilag, a Software QA Engineer specializing in manual and automated testing with Playwright, Selenium, and Postman.",
};

// Runs before first paint so a stored preference never flashes the other
// theme. New visitors see the light palette from the design reference.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t)document.documentElement.dataset.theme="light";if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
