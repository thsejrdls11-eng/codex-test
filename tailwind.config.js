import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#a855f7',
        secondary: '#6b21a8',
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg,#a855f7,#6b21a8)',
      },
    },
  },
  plugins: [],
};
