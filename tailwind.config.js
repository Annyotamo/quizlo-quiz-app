/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            opacity: {
                "bg-opacity-custom": "background-color: rgba(96, 165, 250, 0.8)",
            },
            colors: {
                beige: "#FFFDD0",
                "brown-beige": "#EEDEC5",
                "blue-gray": "#6495ED",
                "alice-white": "#F0F8FF",
                "uranian-blue": "#AFDBF5",
            },
            backgroundImage: {
                "custom-gradient":
                    "repeating-linear-gradient(45deg, rgba(245, 239, 232, 0.5), rgba(245, 239, 232, 0.5) 5px, #6495ED 5px, #6495ED 50px)",
                "beige-blue-gradient": "linear-gradient(to bottom, rgba(245, 239, 232, 0.9), rgba(100, 149, 237, 0.9))",
                "blue-beige-gradient": "linear-gradient(to bottom, rgba(100, 149, 237, 0.9), rgba(245, 239, 232, 0.9))",
            },
            keyframes: {
                fluid: {
                    "0%, 100%": { borderRadius: "50%" },
                    "12.5%": { borderRadius: "40% 60% 60% 40% / 30% 30% 70% 70%" },
                    "25%": { borderRadius: "60% 40% 40% 60% / 50% 50% 50% 50%" },
                    "37.5%": { borderRadius: "30% 70% 70% 30% / 60% 60% 40% 40%" },
                    "50%": { borderRadius: "40% 60% 60% 40% / 50% 50% 50% 50%" },
                    "62.5%": { borderRadius: "60% 40% 40% 60% / 40% 40% 60% 60%" },
                    "75%": { borderRadius: "30% 70% 70% 30% / 60% 60% 40% 40%" },
                    "87.5%": { borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%" },
                },
            },
            animation: {
                fluid: "fluid 4.5s infinite linear",
            },

            borderRadius: {
                oval: "100px / 50px",
            },
        },
        fontFamily: {
            poppins: ["Poppins"],
        },
    },
    plugins: [],
};
