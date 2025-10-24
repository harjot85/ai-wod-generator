import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AI Workout Generator",
  description: "Create AI powered workouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim">
      <body>{children}</body>
    </html>
  );
}
