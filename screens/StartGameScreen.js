import { StyleSheet, TextInput, View } from 'react-native'

import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, //For android
        shadowColor: 'black', //For iOS
        shadowOffset: {width: 0, height: 2}, //for iOS
        shadowRadius: 6, // iOS
        shadowOpacity: 0.25, //iOS
    }
})