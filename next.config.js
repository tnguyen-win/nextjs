/** @type {import('next').NextConfig} */

const ROOT_PATH = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '/nextjs/';
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        dirs: ['app'],
    },
    images: {
        unoptimized: true
    },
    output: 'export',
    basePath: ROOT_PATH
}

module.exports = nextConfig

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//     reactStrictMode: false,
//     images: {
//         unoptimized: true
//     },
//     output: 'export'
// })

// module.exports = withBundleAnalyzer({})
