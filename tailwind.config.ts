import { type Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/actify/dist/**/*.{js,mjs,jsx}'
  ],
  plugins: [require('@tailwindcss/typography')]
}

export default config
