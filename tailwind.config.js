module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern AI / tech palette
        bg: '#071029',
        panel: '#0f1724',
        muted: '#94a3b8',
        text: '#e6eef8',
        primary: {
          DEFAULT: '#00E0B8',
          600: '#00c99f',
          400: '#33e6c2'
        },
        accent: '#7C5CFF',
        glow: 'rgba(0,224,184,0.12)'
      },
      boxShadow: {
        'glow-md': '0 8px 30px rgba(124,92,255,0.12)',
        'glow-teal': '0 10px 30px rgba(0,224,184,0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      }
    },
  },
  plugins: [],
}
