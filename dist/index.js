"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  KeyboardSpacer: () => KeyboardSpacer,
  useKeyboard: () => useKeyboard
});
module.exports = __toCommonJS(index_exports);

// src/useKeyboard.ts
var import_react = require("react");
var import_react_native = require("react-native");
function useKeyboard() {
  const [state, setState] = (0, import_react.useState)({
    visible: false,
    height: 0
  });
  (0, import_react.useEffect)(() => {
    const showEvent = import_react_native.Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = import_react_native.Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const onShow = (e) => {
      setState({
        visible: true,
        height: e.endCoordinates.height,
        duration: e.duration
      });
    };
    const onHide = () => {
      setState({ visible: false, height: 0 });
    };
    const showSub = import_react_native.Keyboard.addListener(showEvent, onShow);
    const hideSub = import_react_native.Keyboard.addListener(hideEvent, onHide);
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return state;
}

// src/KeyboardSpacer.tsx
var import_react_native2 = require("react-native");
var import_jsx_runtime = require("react/jsx-runtime");
function KeyboardSpacer() {
  const { height } = useKeyboard();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native2.View, { style: { height } });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KeyboardSpacer,
  useKeyboard
});
//# sourceMappingURL=index.js.map