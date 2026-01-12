import { useEffect, useState } from "react";
import { Keyboard, Platform, KeyboardEvent } from "react-native";

type KeyboardState = {
  visible: boolean;
  height: number;
  duration?: number;
};

export function useKeyboard(): KeyboardState {
  const [state, setState] = useState<KeyboardState>({
    visible: false,
    height: 0,
  });

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const onShow = (e: KeyboardEvent) => {
      setState({
        visible: true,
        height: e.endCoordinates.height,
        duration: e.duration,
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
