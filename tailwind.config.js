/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         "3xl": { "max": "1439px" },
         // => @media (max-width: 1439px) { ... }

         "2xl": { "max": "1279px" },
         // => @media (max-width: 1279px) { ... }

         "xl": { "max": "1023px" },
         // => @media (max-width: 1023px) { ... }

         "lg": { "max": "767px" },
         // => @media (max-width: 767px) { ... }

         "md": { "max": "639px" },
         // => @media (max-width: 639px) { ... }

         "sm": { "max": "374px" },
         // => @media (max-width: 374px) { ... }
      },
      extend: {
         boxShadow: {
            primary: "0 4px 6px rgba(0, 0, 0, 0.1)",
            input: "0px 0px 20px 0px rgba(0, 0, 0, 0.06)",
            custom:
               "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
         },
         colors: {
            primary: "var(--green-primary)",
            primaryDark: "var(--green-primary-darker)",
            softBackground: "#FBFBFB",
            footerBackgroundSecondary: "rgba(70, 163, 88, 0.10)",
            socialMediaBorder: "rgba(70, 163, 88, 0.20)",
            textPrimary: "#3D3D3D",
            textSecondary: "#727272",
         },
         backgroundImage: {
            primaryGradient:
               "linear-gradient(98deg, rgba(245, 245, 245, 0.50) -23.46%, rgba(245, 245, 245, 0.50) 107.51%)",
         },
      },
   },
   container: {
      center: true,
   },

   plugins: [],
};
