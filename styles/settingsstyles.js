import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    option: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Color.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: FontSize.size_base,
        color: '#fff',
        fontFamily: FontFamily.font_base,
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Color.secondary,
        marginHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    contentText: {
        color: '#fff',
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.font_base,
    },
});
