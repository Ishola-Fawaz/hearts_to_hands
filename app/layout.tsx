import type { Metadata } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hearts to Hands",
    template: "%s · Hearts to Hands",
  },
  description:
    "Hearts to Hands is a community Sadaqah initiative turning giving into direct, dignified support — food baskets, clothing drives, and feeding programs for families in need.",
};

import { SiteHeader } from "./components/navbar";

import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
