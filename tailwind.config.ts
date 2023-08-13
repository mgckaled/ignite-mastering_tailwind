import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
    './src/**/**/*.tsx',
    './src/**/**/**/*.tsx',
  ],
   theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },

      colors: {
        marcel: '#333'
      }
    },
  },
  plugins: [],
}
export default config
