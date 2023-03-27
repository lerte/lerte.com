/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#102B6A', // 主色调
        secondary: '#426AB3', // 次颜色
        success: '#1D953F',
        danger: '#ED1941',
        warning: '#FFC20E',
        info: '#4e72b8',
        light: '#999D9C',
        dark: '#130c0e'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
