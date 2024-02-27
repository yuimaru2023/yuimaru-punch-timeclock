/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // ルートディレクトリから画面遷移しないと404になってしまうのを防ぐ
    reactStrictMode: true,
    output: 'export',
    // https://zenn.dev/dev_shun/articles/ace43099ba43ed
    // npm run build でnum run exportまでやってくれる
    // swcMinify: false,
    productionBrowserSourceMaps:true,
    // experimental: {
    //     appDir: true,
    // },
}

module.exports = nextConfig
