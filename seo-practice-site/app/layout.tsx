import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Website Developer in Pakistan | SEO Optimized Websites",
  description:
    "Professional Next.js developer building fast, SEO-friendly and modern websites for businesses in Pakistan.",
  keywords: [
    "Next.js developer Pakistan",
    "SEO website developer",
    "Next.js web development",
  ],
  verification: {
    google: "KcGIPdOfGmnGSTn9BehYql_rOp6ge4ZXNKwq0jygy3w",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}