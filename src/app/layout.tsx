import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

const dmSans = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado JB",
  description: "Mercado JB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={dmSans.className}>
        <Header />
        <main className="mx-auto max-w-screen-xl p-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
