import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Usman.dev | Next.js Developer",
    template: "%s | Usman.dev",
  },
  description:
    "Usman.dev builds fast, modern and SEO-optimized Next.js websites designed for performance and search engine visibility.",
  keywords: [
    "Next.js developer",
    "SEO optimized websites",
    "web developer",
    "Next.js portfolio",
  ],
  metadataBase: new URL("https://seo-practice-site-khaki.vercel.app"),

  openGraph: {
    title: "Usman.dev | Next.js Developer",
    description:
      "Modern websites built with Next.js, optimized for performance and SEO.",
    url: "https://seo-practice-site-khaki.vercel.app",
    siteName: "Usman.dev",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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