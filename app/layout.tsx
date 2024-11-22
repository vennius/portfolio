import { Sora } from "next/font/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const soraRegular = localFont({
  src: "./fonts/Sora-Regular.ttf",
  variable: "--font-sora-regular",
  weight: "400",
});

const soraSemibold = localFont({
  src: "./fonts/Sora-Semibold.ttf",
  variable: "--font-sora-semibold",
  weight: "600",
});

const soraBold = localFont({
  src: "./fonts/Sora-Bold.ttf",
  variable: "--font-sora-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  );
}
