/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Components/**/*.razor",
        "./Components/**/*.html",
        "./Pages/**/*.razor",
        "./Pages/**/*.html",
        "./wwwroot/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'inter': ['Inter', 'sans-serif']
            },
            colors: {
                'primary': '#3b82f6',
                'primary-light': '#60a5fa',
                'primary-dark': '#1d4ed8'
            },
            animation: {
                'fadeIn': 'fadeIn 0.6s ease-in-out',
                'slideUp': 'slideUp 0.6s ease-in-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: [],
}
