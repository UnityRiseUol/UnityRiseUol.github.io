const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// List your routes here manually
const links = [
  { url: '/#/', changefreq: 'daily', priority: 1.0 },
  { url: '/#/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/#/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/#/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/#/outreach', changefreq: 'weekly', priority: 0.8 },
  { url: '/#/sponsorships', changefreq: 'weekly', priority: 0.8 },
  { url: '/#/contact', changefreq: 'weekly', priority: 0.8 },
];

const stream = new SitemapStream({ hostname: 'https://unityriseuol.github.io' });

streamToPromise(stream).then((data) => {
  const path = resolve(__dirname, '../public/sitemap.xml');
  const writeStream = createWriteStream(path);
  writeStream.write(data.toString());
  writeStream.end();
  console.log('Sitemap created at public/sitemap.xml');
});

links.forEach(link => stream.write(link));
stream.end();