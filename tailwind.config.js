/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth:{
      DEFAULT:'1px'
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.8  )",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      backgroundImage:{
        testi_gradient:`linear-gradient(
          144.39deg,
          #ffffff -278.56%,
          #6d6d6d -78.47%,
          #11101d 91.61%
        )`,
        CTA_gradient:`linear-gradient(
          -168.39deg,
          #ffffff -278.56%,
          #6d6d6d -78.47%,
          #11101d 91.61%
        )`
      },
      gridTemplateColumns:{
        '280':"repeat(3,280px)"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

