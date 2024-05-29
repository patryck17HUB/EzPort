import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
      },
     backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // o 'contain' dependiendo de lo que prefieras
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // asegura que la imagen ocupe toda la anchura disponible
    height: 500, // ajusta la altura según sea necesario
  },
      overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
      },
      profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
      profileEmail: {
        fontSize: 18,
        color: 'gray',
      },
      noProfileText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
      },
    });