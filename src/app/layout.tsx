import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(
  () => import('@/component/organisms/Header'),
  { ssr: false }
)

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cinema Seryu",
  description: "Seryu Cargo - Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>

        {/* header  */}
        <Header />

        {children}

        {/* footer  */}

      </body>
    </html>
  );
}
