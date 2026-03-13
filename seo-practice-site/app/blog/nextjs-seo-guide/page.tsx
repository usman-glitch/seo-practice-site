import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SEO Guide",
  description:
    "Complete guide to optimizing Next.js websites for search engines including metadata, sitemap and structured data.",
};

export default function NextSeo() {
  return (
    <main>
      <h1>Next.js SEO Guide</h1>

      <p>
        Websites built with Next.js can rank very well on Google when SEO
        fundamentals are applied properly.
      </p>

      <h2>Important Next.js SEO Features</h2>

      <ul>
        <li>Metadata API</li>
        <li>Sitemap generation</li>
        <li>Server-side rendering</li>
        <li>Fast performance</li>
      </ul>

      <p>
        Modern frameworks like Next.js make it easier to build SEO optimized
        websites.
      </p>
    </main>
  );
}