/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         boxShadow: {
            primary: "0 4px 6px rgba(0, 0, 0, 0.1)",
         },
         colors: {
           primary:"var(--green-primary)"
         },
      },
      container: {
         center: true,
      },
   },
   plugins: [],
};
