/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        'light-black': 'hsla(0, 0%, 0%, 0.5)',
        'medium-black': 'hsla(0, 0%, 0%, 0.15)',
        lotion: 'hsl(0, 0%, 98%)',
        verdigris: 'hsl(176, 50%, 47%)',
        'deep-verdigris': 'hsl(176, 72%, 28%)',
        'light-deep-verdigris': 'hsla(176, 72%, 28%, 0.05)',
        'sonic-silver': 'hsl(0, 0%, 48%)',
        'dark-charcoal': 'hsl(0, 0%, 18%)',
        'light-dark-charcoal': 'hsla(0, 0%, 18%, 0.05)',
        'medium-dark-charcoal': 'hsla(0, 0%, 18%, 0.10)',
        'philippine-silver': 'hsl(0, 0%, 69%)',
        'dark-silver': 'hsl(0, 0%, 44%)',
      },
    },
    fontFamily: {
      commissioner: ['var(--font-commissioner)']
    },
  },
  plugins: [],
}