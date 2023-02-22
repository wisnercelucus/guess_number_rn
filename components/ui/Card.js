import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, //For android
    shadowColor: "black", //For iOS
    shadowOffset: { width: 0, height: 2 }, //for iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.25, //iOS
  },
});
