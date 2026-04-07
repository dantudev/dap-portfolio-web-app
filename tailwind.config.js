import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui']],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
