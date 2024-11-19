/** @type {import("tailwindcss").Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  corePlugins: {
    backgroundOpacity: true,
  },
  theme: {
    extend: {
      colors: {
        background: "#171F20",
        filledButton: "#46AAAC", // "old one: #F5E5C9",
        tagBackground: "#154647",
        tagBackgroundSelected: "#B5E3A0",
        tagText: "#46AAAC",
        notification: "#5392FC",
        chat: "#203031",
        textGray: "#ABABAB",
        chatGray: "#333333",
        chatLight: "#F2CD92",
        barGreen: "#3A5B5B",
        applicationGreen: "#3e5457",
        disabledGray: "#444444",
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
