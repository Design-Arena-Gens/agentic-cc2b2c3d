import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Performance - Cinematic Concert Experience",
  description: "Experience the energy and passion of a captivating live performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
