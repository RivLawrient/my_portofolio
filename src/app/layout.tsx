import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "My Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-pink-500">{children}</body>
    </html>
  );
}
