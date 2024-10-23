/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
      },
      colors: {
        custom_500_gray: '#8B919F',
        custom_800_blue: '#1A2035',
        custom_700_blue: '#202940',
        custom_500_purple: '#8028A1',
        custom_color_confirm: '#429E5B',
        custom_color_warning: '#F98306',
        custom_color_fail: '#D42E2A',
      },
    },
  },
  plugins: [],
};
