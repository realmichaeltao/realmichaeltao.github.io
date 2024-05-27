/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/realmichaeltao.github.io' : '',
  assetPrefix: isProd ? '/realmichaeltao.github.io/' : '',
};

