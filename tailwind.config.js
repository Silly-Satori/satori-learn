/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "bg": "var(--bg)",
        "text": "var(--text)",
        "accent": "var(--accent)",
        "primary-contrast": "var(--primarycontrast)",
        "secondary-contrast": "var(--secondarycontrast)",
        "bg-contrast": "var(--bgcontrast)",
        "text-contrast": "var(--textcontrast)",
        "accent-contrast": "var(--accentcontrast)",
        "shadow": "var(--shadow)",
        "secondary-dark": "var(--secondarydark)",
        "invert-text": "var(--inverttext)",
      },
    },
  },
  plugins: [],
}

