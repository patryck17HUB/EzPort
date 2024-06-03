import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";


export const styles = StyleSheet.create({
  home1: {
    fontSize: 32,
    color: "#FFFFFF",
    width: "100%",
    textAlign: "center",
    fontFamily: FontFamily.font_base,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 20,
  },
  backgroundImage: {
    flex:7,
    resizeMode: 'cover', // o 'contain' dependiendo de lo que prefieras
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // asegura que la imagen ocupe toda la anchura disponible
    height: 300, // ajusta la altura según sea necesario
  },
  container: {
    flex: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '0%',
    marginBottom: '24%',
    
  },
  titulo:{
    fontSize: 100,
    color: '#fff',
    fontWeight: 'bold',
    flex:0,
  },
    button: {
      backgroundColor: '#7539e5',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      marginTop: 20,
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 40,
    },
    modalContainer: {
      flex: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    option: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    optionText: {
      fontSize: 16,
    },

    // Botones de cada ejercicio
    exerciseItem: {
      margin: 10,
      width: '100%',
      justifyContent: "center",
    alignItems: "center",
    },
    exerciseText: {
      fontSize: 16,
      color: '#fff',
    },
    exercisePText: {
      fontSize: 16,
      color: '#000',
    },
    exerciseList: {
      marginTop: '10%',
      justifyContent: "center",
      alignSelf: 'center', 
      width: '100%',
      flex:40,
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
   
    
});

/*   
encabezado: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: Color.pie,
  width: "100%",
  position: "absolute",
  top: 0,
  flexDirection: "row",
},
si: {
  textAlign: "center",
  color: Color.colorWhite,
  fontSize: FontSize.size_base,
  flex: 1,
},
*/