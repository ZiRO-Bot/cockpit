/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widget/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                discord: "#5865F2",
                dark: "#0E1418",
                "dark-alt": "#272C30",
            },
            animation: {
                spinner:
                    "1.2s cubic-bezier(0.32, 0.65, 0.71, 0.4) 0s infinite normal none running spin",
            },
            boxShadow: {
                "border-like": "0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1)",
                "border-like-btn": "0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.2)",
                "border-like-dark":
                    "0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px hsla(0,0%,100%,.08)",
                "border-like-dark-btn":
                    "0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px hsla(0,0%,100%,.15)",
            },
        },
    },
    safelist: [
        {
            pattern: /stroke-.+/,
            variants: ["dark"],
        },
        {
            pattern: /bg-.+/,
            variants: ["dark", "hover"],
        },
        {
            pattern: /p(x|y)?-.+/,
        },
        "cursor-pointer",
    ],
    plugins: [],
}
