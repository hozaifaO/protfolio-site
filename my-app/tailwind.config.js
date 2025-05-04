/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#272727",
        input: "#333333",
        ring: "#BB86FC",
        background: "#121212",
        foreground: "#E0E0E0",
        primary: {
          DEFAULT: "#BB86FC",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#03DAC6",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#CF6679",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#333333",
          foreground: "#A0A0A0",
        },
        accent: {
          DEFAULT: "#03DAC6",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#1E1E1E",
          foreground: "#E0E0E0",
        },
        card: {
          DEFAULT: "#1E1E1E",
          foreground: "#E0E0E0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 