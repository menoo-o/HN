import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Haniya Nafisa",
  description: "A musician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      

        {children}
        <Footer />
      </body>
    </html>
  );
}
