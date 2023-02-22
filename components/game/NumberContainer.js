import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans-bold",
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
  },
  numberText: {
    color: Colors.accent500,
    fontWeight: "bold",
    fontSize: 36,
  },
});
