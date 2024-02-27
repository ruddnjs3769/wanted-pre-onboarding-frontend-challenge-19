export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // 자주 사용되는 추가 속성을 정의합니다. (색상 등)
      colors: {
        black: "#292929",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
