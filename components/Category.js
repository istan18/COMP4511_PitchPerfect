"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
function Category({ category, icon }) {
    return (<react_native_1.TouchableOpacity className="flex-col items-center">
      <react_native_1.View className="items-center justify-center rounded-2xl bg-gray-500 w-16 h-16">
        {icon}
      </react_native_1.View>
      <react_native_1.Text className="text-white text-lg">{category}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
}
exports.default = Category;
