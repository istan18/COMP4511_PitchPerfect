"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const TitleInput = ({ text = "", setText = () => { }, placeholder, children, heading, leftIcon, rightIcon, padding = "pb-0", maxLength, includeCounter = false, width = "w-4/5", height = "h-16", marginBottom = "", }) => {
    return (<react_1.default.Fragment>
      <react_native_1.View className={`${width} mx-auto ${marginBottom}`}>
        {heading ? (<react_native_1.Text className={"text-white text-3xl mx-auto mb-3 ml-0"}>
            {heading}
          </react_native_1.Text>) : null}
        <react_native_1.TextInput className={`border text-left text-white border-gray-400 ${height} text-2xl rounded-2xl ${padding} w-full color-white border border-gray-400 rounded-2xl pl-4  text-xl`} onChangeText={(newText) => {
            if (maxLength) {
                if (newText.length >= maxLength)
                    return;
            }
            setText(newText);
        }} value={text} placeholder={placeholder} maxLength={maxLength}/>
        {includeCounter && (<react_native_1.Text className={"text-white text-lg ml-auto"}>
            {text.length}/{maxLength}
          </react_native_1.Text>)}
        <react_native_1.View className={"absolute left-3 top-3"}>{leftIcon}</react_native_1.View>
        <react_native_1.View className={"absolute top-3 right-3"}>{rightIcon}</react_native_1.View>
        {children}
      </react_native_1.View>
    </react_1.default.Fragment>);
};
exports.default = TitleInput;
