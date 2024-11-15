/** @type {import("tailwindcss").Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#171F20",
        filledButton: "#F5E5C9",
        tagBackground: "#154647",
        tagBackgroundSelected: "#B5E3A0",
        tagText: "#46AAAC",
        notification: "#5392FC",
        chat: "#203031",
        textGray: "#ABABAB",
        chatGray: "#333333",
        chatLight: "#F2CD92",
      },
    },
  },
  plugins: [],
};
