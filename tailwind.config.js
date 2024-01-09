/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         boxShadow: {
            primary: "0 4px 6px rgba(0, 0, 0, 0.1)",
            input: "0px 0px 20px 0px rgba(0, 0, 0, 0.06)",
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
      },
      container: {
         center: true,
      },
   },
   plugins: [],
};
