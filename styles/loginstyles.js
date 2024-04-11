import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttontext: {
        color: '#FFFFFF',
        fontFamily: FontFamily.bold,
        backgroundColor: Color.secondary,
        padding: 10,
    },
    TextInput: {
        borderWidth: 1,
        color: "#FFFFFF",
        borderColor: Color.secondary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
});