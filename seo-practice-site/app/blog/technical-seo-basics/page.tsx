import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SEO Basics",
  description:
    "Learn the fundamentals of technical SEO including crawling, indexing, sitemaps and page performance.",
};

export default function TechnicalSeo() {
  return (
    <main>
      <h1>Technical SEO Basics</h1>

      <p>
        Technical SEO focuses on improving how search engines crawl and index
        websites.
      </p>

      <h2>Key Technical SEO Elements</h2>

      <ul>
        <li>Sitemaps</li>
        <li>Robots.txt</li>
        <li>Page speed</li>
        <li>Structured data</li>
      </ul>

      <p>Technical SEO helps search engines understand your website.</p>
    </main>
  );
}