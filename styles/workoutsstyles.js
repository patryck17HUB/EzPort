import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        color: "#FFFFFF",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
        buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});