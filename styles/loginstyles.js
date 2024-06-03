import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000',
        flex: 1,
        
    },
    titulo:{
        fontSize: 80,
        color: '#fff',
        fontWeight: 'bold',
        flex:3,
      
    },
    subTiltle:{
        fontSize: 20,
        color: 'gray',
        flex:11,
    },
    containerButton: {
        position: 'absolute',
        top: 530,
        alignItems: 'center', 
    },
    logoutButtonText: {
        color: '#FF0000',
    },
    userInfo:{
        color: '#FF0000',
    },
    errorText:{
        color: '#FF0000',
    }
});