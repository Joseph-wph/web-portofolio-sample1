import { Charm, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-charm",
  display: "swap",
});
