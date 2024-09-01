import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight:['400', '700'],
  variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
  title: "Steve Banking",
  description: "The platform banking for the future",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSerif.className}`}>{children}</body>
    </html>
  );
}
