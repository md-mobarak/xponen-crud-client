/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f99fa1",

          "secondary": "#0c8e11",

          "accent": "#f7d600",

          "neutral": "#19161D",

          "base-100": "#EDECF3",

          "info": "#A5BBF3",

          "success": "#11927D",

          "warning": "#FCDC3B",

          "error": "#EE586C",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  