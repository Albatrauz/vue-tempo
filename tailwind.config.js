module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      secondary: '#947EC3',
      tertiary: '#6A67CE', // --> Maybe button color?
      green: '#99FFCD',
      base: '#282a36',
      baseLight: '#29232f',
      text: '#afc2d5',
      // springGreen: '#27fb6b',
      springGreenHover: '#4dd578'
    },
    extend: {
      margin: {
        xs: '6px',
        sm: '12px',
        mob: '18px',
        def: '24px',
        30: '30px',
        md: '36px',
        lg: '48px',
        xl: '60px',
        xxl: '72px',
      },
      padding: {
        xs: '6px',
        sm: '12px',
        mob: '18px',
        def: '24px',
        30: '30px',
        md: '36px',
        lg: '48px',
        xl: '60px',
        xxl: '72px',
      },
      gap: {
        xs: '6px',
        sm: '12px',
        mob: '18px',
        def: '24px',
        30: '30px',
        md: '36px',
        lg: '48px',
        xl: '60px',
      },
    },
  },
  plugins: [],
};
