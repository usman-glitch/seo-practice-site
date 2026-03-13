import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Developer Portfolio",
  description:
    "Portfolio of Usman.dev – building fast, modern and SEO optimized Next.js websites.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      
{/* Navbar */}
<nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <Link href="/" className="font-semibold text-lg tracking-tight">
      Usman.dev
    </Link>

    <div className="hidden md:flex gap-8 text-sm font-medium">
      <Link href="/about" className="hover:text-black transition">About</Link>
      <Link href="/blog" className="hover:text-black transition">Blog</Link>
      <a href="#services" className="hover:text-black transition">Services</a>
      <a href="#contact" className="hover:text-black transition">Contact</a>
    </div>

    <a
      href="#contact"
      className="px-4 py-2 bg-black text-white rounded-xl text-sm hover:scale-105 transition"
    >
      Hire Me
    </a>
  </div>
</nav>

{/* Hero Section */}
<section className="max-w-5xl mx-auto px-6 py-28 text-center">
  <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
    Building Fast & <span className="text-black">SEO-Optimized</span>  
    <br /> Next.js Websites
  </h1>

  <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
    I help businesses grow online with modern UI, performance-focused
    architecture and scalable web solutions.
  </p>

  <div className="mt-10 flex justify-center gap-4">
    <a
      href="#contact"
      className="px-8 py-3 bg-black text-white rounded-2xl shadow-lg hover:scale-105 transition duration-300"
    >
      Work With Me
    </a>

    <a
      href="#services"
      className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300"
    >
      View Services
    </a>
  </div>
</section>

{/* Services Section */}
<section
  id="services"
  className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8"
>
  {[
    {
      title: "High Performance",
      desc: "Optimized for speed, scalability and SEO best practices.",
    },
    {
      title: "Modern UI/UX",
      desc: "Clean, responsive and conversion-focused design.",
    },
    {
      title: "SEO Structure",
      desc: "Built with proper metadata, indexing and ranking strategy.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
      <p className="text-gray-600">{item.desc}</p>
    </div>
  ))}
</section>

{/* SEO Internal Links Section */}
<section className="max-w-4xl mx-auto px-6 py-20 text-center">
  <h2 className="text-3xl font-bold mb-6">Learn More About SEO</h2>

  <p className="text-gray-600 mb-8">
    Explore guides and articles about SEO strategies and optimization.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6">
    <Link
      href="/blog/seo-basics"
      className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
    >
      SEO Basics Guide
    </Link>

    <Link
      href="/blog/on-page-seo"
      className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
    >
      On Page SEO Techniques
    </Link>

    <Link
      href="/blog"
      className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
    >
      Visit Blog
    </Link>
  </div>
</section>

{/* About Section */}
<section className="max-w-4xl mx-auto px-6 py-24 text-center">
  <h2 className="text-3xl font-bold mb-6">Why Choose Me?</h2>
  <p className="text-gray-600 leading-relaxed text-lg">
    With strong experience in Next.js and modern web technologies,
    I build websites that are not just visually appealing but also
    technically optimized for search engines and performance.
  </p>

  <div className="mt-8">
    <Link
      href="/about"
      className="text-black font-semibold underline"
    >
      Learn more about me
    </Link>
  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="bg-black text-white py-20 text-center"
>
  <h2 className="text-3xl font-bold mb-6">Let’s Build Something Great</h2>
  <p className="text-gray-300 mb-8">
    Ready to launch your next project? Let’s talk.
  </p>

  <a
    href="mailto:yourname@email.com"
    className="px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
  >
    Contact Me
  </a>
</section>

{/* Footer */}
<footer className="text-center py-8 text-gray-500 text-sm">
  © {new Date().getFullYear()} Your Name. All rights reserved.
</footer>

    </main>
  );
}