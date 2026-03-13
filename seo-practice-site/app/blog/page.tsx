import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Blog",
  description: "Learn SEO basics, ranking strategies and website optimization techniques.",
};

export default function Blog() {
  return (
    <main>
      <h1>SEO Blog</h1>
      <p>Learn SEO basics and optimization strategies.</p>
    </main>
  );
}