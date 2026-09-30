module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        "gray-11": "var(--gray-11)",
        "normal-dark": "var(--normal-dark)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        white: "var(--white)",
      },
      fontFamily: {
        description: "var(--description-font-family)",
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        paragraph: "var(--paragraph-font-family)",
      },
    },
  },
  plugins: [],
};
