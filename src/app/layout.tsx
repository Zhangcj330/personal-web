import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Inter (body copy) + Space Grotesk (display/headings) — open-source Google
// Fonts chosen to match the reference site's Inter + Archivo/Clash Grotesk
// pairing without depending on any proprietary/licensed font files.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Your Name · AI Systems Portfolio",
  description:
    "AI Systems Portfolio for Financial Services — hands-on engineering, agentic AI, and 0→1 product thinking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
