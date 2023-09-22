/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },

    colors: {
      background: "#171e20",
      foreground: "#2C3333",
      card: "#3b4545",
      primary: "#0E8388",
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
