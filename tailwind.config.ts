import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#1d3344',
        botAvatar: '#5ef2e8',
        botChat: '#50d8ff',
        botText: '#dff8fd',
        userChat: '#ccdfef',
        userText: '#323337',
        inputText: '#a7cde5',
        sendButton: '#ff6002',
        buttonText: '#ffffff',
      },
    },
  },
  plugins: [],
}
export default config
