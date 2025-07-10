// tailwind.config.mjs
module.exports= {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: {
    extend: {
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': { 
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
      })
    },
  ],
}
