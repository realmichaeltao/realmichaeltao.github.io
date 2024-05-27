/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/realmichaeltao.github.io' : '',
  assetPrefix: isProd ? '/realmichaeltao.github.io/' : '',
  output: 'export',
};

export default nextConfig;
