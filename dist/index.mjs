// src/useKeyboard.ts
import { useEffect, useState } from "react";
import { Keyboard, Platform } from "react-native";
function useKeyboard() {
  const [state, setState] = useState({
    visible: false,
    height: 0
  });
  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
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
    const showSub = Keyboard.addListener(showEvent, onShow);
    const hideSub = Keyboard.addListener(hideEvent, onHide);
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return state;
}

// src/KeyboardSpacer.tsx
import { View } from "react-native";
import { jsx } from "react/jsx-runtime";
function KeyboardSpacer() {
  const { height } = useKeyboard();
  return /* @__PURE__ */ jsx(View, { style: { height } });
}
export {
  KeyboardSpacer,
  useKeyboard
};
//# sourceMappingURL=index.mjs.map