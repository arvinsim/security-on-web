// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
    //   {
    //     source: '/sitemap.xml',
    //     destination: 'http://www.viki.com/sitemap.xml',
    //   },
      {
        source: '/cars_:slug([0-9-]+).html',
        destination: '/cars/:slug',
      },
      {
        source: '/foobar',
        destination: '/foobar/sitemap.xml',
      },
    ]
  },
}
 
module.exports = nextConfig