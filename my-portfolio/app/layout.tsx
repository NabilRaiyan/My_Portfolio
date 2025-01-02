
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Raiyan | Full Stack developer",
  description: "Full Stack Web developer",
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
