import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    option: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginHorizontal: 10, // margen para que no toque los bordes
        borderRadius: 5, // bordes redondeados
    },
    optionText: {
        fontSize: 18,
        color: '#fff',
    },
});