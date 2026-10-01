import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzfizz — Digital Experiences",
  description: "Scroll-driven digital experience built for Itzfizz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}