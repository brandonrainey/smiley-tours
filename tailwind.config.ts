import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Varela': ['Varela Round', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  
}
export default config
