import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7539e5',
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
  backgroundColor: '${Color.secondary}CC',
  marginHorizontal: 20,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  
},
exerciseItem: {
  margin: 10,
  width: '100%',
  justifyContent: "center",
  alignItems: "center",
},

contentText: {
  marginLeft: 0, // Mantén el margen izquierdo en 20
  marginRight: 0,
  color: '#fff',
  fontSize: FontSize.size_base,
  fontFamily: FontFamily.font_base,
},

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    marginLeft: '3%', // Mantén el margen izquierdo en 20
    marginRight: '9%',
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(204, 204, 204, 0.5)', 
    width: '100%',
    borderBottomWidth: 2, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: '19%'
  },
  modalContainer: {
    flex: 1,
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
    marginRight: '9%'
  },
  exerciseList: {
    marginTop: '10%',
    justifyContent: "center",
    alignSelf: 'center',
    width: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonchueco: {
    backgroundColor: '#7539e5',
    padding: 15,
    marginRight: '5.5%',
    borderRadius: 5,
    width: '80%',
  },
  botongift: {
    backgroundColor: '#7539e5',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '80%',
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