import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: "center",
        justifyContent: "center",
    },
    titulo:{
        fontSize: 80,
        color: '#000',
        fontWeight: 'bold',
    },
    subTiltle:{
        fontSize: 20,
        color: 'gray',
    },
    googleButton:{
        borderColor :'gray',
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 50,
    },
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
});