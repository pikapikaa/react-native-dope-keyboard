import { Image } from "expo-image";
import { View, TextInput, StyleSheet } from "react-native";
import { KeyboardSpacer } from "react-native-dope-keyboard";

import ParallaxScrollView from "@/components/parallax-scroll-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="gfdgdddddgd..ttt." />
        <KeyboardSpacer />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 12 },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
