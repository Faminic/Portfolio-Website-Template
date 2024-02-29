/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textColor: "#F4F4F4",
        bgColor: "#1A1A1A",
        primaryColor: "#DCD0C0",
        secondaryColor: "#6E7A93",
        hoverColor: "#6E7A93",
        textColorMuted: "#BEBEBE"
      },
    },
  },
  plugins: [],
};
