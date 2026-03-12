import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap-0.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}