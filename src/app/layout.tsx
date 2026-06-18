import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://snow-dev-portfolio.vercel.app"),
  title: "SnowDev - MERN Developer & Designer Portfolio",
  description:
    "Portfolio for SnowDev, a MERN Stack Developer and UI/UX Designer crafting user-centric experiences with pixel-perfect precision.",
  openGraph: {
    title: "SnowDev - MERN Developer & Designer Portfolio",
    description:
      "Portfolio for SnowDev, a MERN Stack Developer and UI/UX Designer crafting user-centric experiences with pixel-perfect precision.",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@snowdev",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
