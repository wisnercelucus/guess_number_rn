import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
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
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
