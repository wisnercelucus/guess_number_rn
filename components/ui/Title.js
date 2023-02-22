import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    //fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    //borderBottomWidth: Platform.OS === "android" ? 0 : 2,
    borderBottomWidth: Platform.select({ ios: 2, android: 0 }),
    borderBottomColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
  },
});
