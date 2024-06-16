import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      h2: ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      h3: ['1.5rem', { lineHeight: '2rem' }], // 24px
      h4: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
      h5: ['1rem', { lineHeight: '1.5rem' }], // 16px
      h6: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      p: ['1rem', { lineHeight: '1.5rem' }], // 16px (default for paragraphs)
    },
    fontWeight: {
      h1: '700',
      h2: '700',
      h3: '600',
      h4: '600',
      h5: '500',
      h6: '500',
      p: '400', // Default for paragraphs
    },
    extend: {
      dropShadow: {
        'xl': '0 4px 4px #64249E',
        'l': '0 2px 2px #64249E',
        '4xl': [
            '0 35px 35px #64249E',
            '0 45px 65px #64249E'
        ]
      },
      height: {
        "88vh": "88vh"
      },
      width: {
        "15.6rem": "15.6rem",
        "19.5rem": "19.5rem",
        "34rem": "34rem",
        "36rem": "36rem",
        "45rem": "45rem",
        "56.8rem": "56.8rem",
        "90rem": "90rem"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        customFont: ['GTWalsheim', 'GT-Walsheim-Pro'], 
      },
      colors: {
        'primary': "#6424A0",
        'slight-grey': "#A0A0A0",
        'custom-border': "#F4F4F4",
        "#2A2A2E": "#2A2A2E",
        "#15151B": "#15151B",
        "#2C2338":"#2C2338",
        'login-color': '#D6A7FF',
        "#62447D": "#62447D",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      spacing: {
        "15rem": "15rem"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
};
export default config;
