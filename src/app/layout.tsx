import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehrabani",
  description: "Where the hearts beats",
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
      </body>
    </html>
  );
}
