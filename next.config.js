/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        dirs: ["app"],
    },
    images: {
        unoptimized: true
    },
    output: 'export',
    basePath: "/nextjs"
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
