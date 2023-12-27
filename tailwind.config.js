/** @type {import('tailwindcss').Config} */
import { withMaterialColors } from 'tailwind-material-colors'

module.exports = withMaterialColors(
  {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/actify/dist/**/*.{js,cjs,jsx}'
    ],
    plugins: [require('@tailwindcss/typography')]
  },
  {
    primary: '#006a6a'
  },
  {
    extend: true
  }
)
