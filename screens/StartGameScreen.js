import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/ui/Card";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onConfirmNumber }) {
  const [enterNumber, setEnterNumber] = useState("");

  const { width, height } = useWindowDimensions();

  numberInputHandler = (value) => {
    setEnterNumber(value);
  };

  onConfirmInputHandler = () => {
    const providedNumber = parseInt(enterNumber);
    if (isNaN(providedNumber) || providedNumber <= 0 || providedNumber > 99) {
      Alert.alert(
        "Invalid number",
        "The value needs to be a valid number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: onResetInputHandler }]
      );

      return;
    }

    onConfirmNumber(providedNumber);
  };

  onResetInputHandler = () => {
    setEnterNumber("");
  };

  const marginTop = height < 380 ? 20 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              autoCapitalize="none"
              value={enterNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onResetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onConfirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 400 ? 12 : 100,
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
