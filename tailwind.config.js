/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        BtnLanjut: ["#D9D9D9"],
        menuAndalan: ["#CFB4AC"],
        BtnHoverMenu: ["#F8AB75"],
        btnDropdown: ["#958D8D"],
        btnmenu: ["#C8A287"],
      },
      textColor: {
        textandalan: ["#C8A287"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
