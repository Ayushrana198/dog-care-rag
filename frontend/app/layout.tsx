import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Care AI",
  description: "AI-powered Dog Care Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}