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
    scrollContainer: {
        marginTop: '5%',
        flexGrow: 1,
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
    logoutButton: {
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#7539e5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: '5%',
    },
    logoutButtonText: {
        fontSize: FontSize.size_base,
        color: '#FFFFFF',
        fontFamily: FontFamily.font_base,
    },
    logocontainer: {
        alignSelf: 'center',
        marginVertical: 30,
        width: '50%',
        aspectRatio: 2,
    },
    logo: {
        flex: 1, 
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});
