import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>SEO Blog</h1>

      <ul>
        <li>
          <Link href="/blog/learn-seo-2026">How to Learn SEO in 2026</Link>
        </li>

        <li>
          <Link href="/blog/nextjs-seo-guide">Next.js SEO Guide</Link>
        </li>

        <li>
          <Link href="/blog/technical-seo-basics">Technical SEO Basics</Link>
        </li>
      </ul>
    </main>
  );
}