/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widget/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
            },
            colors: {
                dark: "#0E1418",
                "dark-alt": "#272C30",
            },
            animation: {
                spinner:
                    "1.2s cubic-bezier(0.32, 0.65, 0.71, 0.4) 0s infinite normal none running spin",
            },
        },
    },
    plugins: [],
}
