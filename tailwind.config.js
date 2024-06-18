/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        // extend: {
        //     keyframes: {
        //         coin: {
        //             '100%': { transform: 'rotateY(360deg)' }
        //         }
        //     },
        //     animation: {
        //         coin: 'coin 4s linear infinite'
        //     }
        // },
        // screens: {
        //     'xs': '0',
        //     'sm': '576px',
        //     'md': '786px',
        //     'lg': '992px',
        //     'xl': '1200px',
        //     'xxl': '1440px'
        // },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('megaHover', ['&:hover', '&:active', '&:focus'])
        })
    ],
    darkMode: 'class'
}
