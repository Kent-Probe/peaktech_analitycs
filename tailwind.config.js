/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#EA5600",
                secondary: "#201A23",
                background: "#efefef",
                border: "#3C3C3B",
            },
            fontFamily: {
                Berlin: ["Berlin Sans FB", "sans-serif"],
                "Berlin-Bold": ["Berlin Sans FB Bold", "sans-serif"],
                "Releway": ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
