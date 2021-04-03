/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  theme: {
    fontFamily: {
      sans: 'Noto Sans',
    },
    extend: {
      colors: {
        'background-black': '#040404',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
