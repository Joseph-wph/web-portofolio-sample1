import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/common/providers";
import { charm, inter } from "@/lib/fonts";
import { SITE } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.fullName} — ${SITE.title}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.fullName} — ${SITE.title}`,
    description: SITE.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${charm.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
