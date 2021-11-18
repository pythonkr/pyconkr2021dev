const axios = require('axios');
const fs = require('fs');
const prettier = require('prettier');

const getDate = new Date().toISOString();
const PYCON_DOMAIN = 'https://2021.pycon.kr';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });
(async () => {
  const programs = await axios({
    method: 'get',
    url: 'https://2021.api.pycon.kr/api/v1/program',
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });

  const sessionList = programs.map((program) => {
    return { id: program.id };
  });

  const sessionListSitemap = `
  ${sessionList
    .map((session) => {
      return `
        <url>
          <loc>${`${PYCON_DOMAIN}/program/${session.id}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`;
    })
    .join('')}
`;

  const sponsors = await axios({
    method: 'get',
    url: 'https://2021.api.pycon.kr/api/v1/sponsors',
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });

  const sponsorList = sponsors.map((sponsor) => {
    return { slug: sponsor.slug };
  });

  const sponsorListSitemap = `
${sponsorList
  .map((sponsor) => {
    return `
    <url>
      <loc>${`${PYCON_DOMAIN}/sponsors/${sponsor.slug}`}</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
  })
  .join('')}
`;

  const generatedSitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
  	<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${sessionListSitemap}
    ${sponsorListSitemap}
  </urlset>
`;

  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync(
    '../public/sitemap/sitemap-posts.xml',
    formattedSitemap,
    'utf8'
  );
})();
