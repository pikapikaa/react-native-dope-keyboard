import { View } from "react-native";
import { useKeyboard } from "./useKeyboard";

export function KeyboardSpacer() {
  const { height } = useKeyboard();
  return <View style={{ height }} />;
}
