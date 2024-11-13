// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#f97316',
        'accent': '#6ee7b7',
        'background': '#f3f4f6',
        'card': '#ffffff',
        'footer': '#1f2937',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
