module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Overpass Mono"'],
        serif: ["Montserrat"],
        body: ["sans"],
      },
      colors: {
        black: "#010101",
        primary: "#1f2023",
        secondary: "#1b1c1f",
        grayLight: "#a4a4a5",
        offWhite:"#fbfbfd",
        gray: "#5d5e5f",
        dark:"#0e0d0d",
        blue: "#0078e7",
        Zinc:"#04a7eb",
        zincLight:"#00aff0",
        blueLight:"#d4ecf9",
        blueDefault:"#f4f6fa",
        headingblue:"#3f4451",
        textBlue:"#677294",
        textRecent:"#565656",
        blueFooter:"#0f1e3d",
        footerHeading:"#6c83bf",
        footerLink:"#1375ba",
        facebook:"#3b5998",
        twitter:"#00acee",
        pinterest:"#E60023",
        footerBorder:"#2e3b57",
      },
      backgroundImage: {
        CareerBg: "url('/img/career.jpg')",
        DeveloperBg: "url('/img/developer.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
