/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  theme: {
    purge: ['./src/**/*.tsx', './src/**/*.ts'],
    fontFamily: {
      sans: 'Noto Sans',
    },
    extend: {
      colors: {
        black: {
          background: '#040404',
        },
      },
      borderRadius: {
        avatar: '6rem',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
