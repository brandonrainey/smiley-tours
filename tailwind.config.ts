import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Varela: ['Varela Round', 'sans-serif'],
        CarterOne: ['Carter One', 'sans-serif'],
        Acme: ['Acme', 'sans-serif'],
      },
      screens: {
        custom: '1100px',
      },
      textShadow: { 
        '1': '1px 1px 3px rgb(186, 6, 102)',
        '2': '2px 2px 10px rgba(241, 82, 167, 0.401)',
        '3': '2px 3px 3px rgba(186, 6, 102, 0.671)',
        '4': '2px 2px 3px rgba(239, 76, 163, 0.269)',
        '5': '1px 1px 3px rgba(240, 11, 133, 0.282)',
        '6': '2px 2px 6px rgba(255, 47, 158, 0.315)',
        '7': '2px 2px 3px rgba(186, 6, 102, 0.282)',
      },
    },
  },
  plugins: [require('tailwindcss-animated'), plugin(function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        'text-shadow': (value: any) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
  
}
export default config
