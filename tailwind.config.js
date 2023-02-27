module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lead: '#EEF3D2',
      secondary: '#947EC3',
      tertiary: '#6A67CE',
      blank: '#FAF5E4',
      dark: '#6A67CE',
      green: '#99FFCD',
      base: '#16282c',
      baseLight: '#29232f',
      textBase: '#afc2d5',
      springGreen: '#27fb6b',
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
