"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Message = ({ message, time, isSender }) => {
    return (<react_native_1.View className={`max-w-80 ${isSender ? "mr-4 ml-auto" : "ml-4 mr-auto"}`}>
      <react_native_1.Text className={`${isSender ? "bg-chat" : "bg-chatGray"} rounded-2xl p-4 text-white text-xl`}>
        {message}
      </react_native_1.Text>
      <react_native_1.Text className={`text-textGray mt-2 ${isSender ? "ml-auto" : "mr-auto"}`}>
        {time}
      </react_native_1.Text>
    </react_native_1.View>);
};
exports.default = Message;
