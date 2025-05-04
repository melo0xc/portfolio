/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['var(--font-roboto)', 'sans-serif'],
                manrope: ['var(--font-manrope)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

