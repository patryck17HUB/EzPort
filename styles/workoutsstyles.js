import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#000000',
    },
    backgroundImage: {
      flex: 1,
      height: 10,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    createButton: {
      padding: 8,
      backgroundColor: Color.purple1,
      borderRadius: 4,
    },
    createButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    gradient:{
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      width: '85%',
    },
    planRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    planTitle: {
      color: '#fff',
    },
    planCount: {
      color: '#fff',
    },
    backgroundImage: {
      flex:1,
      width: '100%', // asegura que la imagen ocupe toda la anchura disponible
      height: 10, // ajusta la altura según sea necesario
      backgroundColor: 'rgba(204, 204, 204, 0)',
      position: 'absolute',
      bottom: 0,
    },
});

export const planstyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: '5%',
    width: '85%',
    alignSelf: 'center',
  },
  planTitle: {
    fontSize: 30, // Tamaño manual para size_xl
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'Arial-BoldMT', // Fuente manual para font_bold
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  planDescription: {
    fontSize: 16, // Tamaño manual para size_base
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'ArialMT', // Fuente manual para font_base
  },
  moreButton: {
    fontSize: 14, // Tamaño manual para size_small
    color: '#3498db', // Color manual para primary
    marginTop: 5,
  },
  exerciseContainer: {
    marginTop: '5%',
    marginBottom: '10%',
  },
  exerciseName: {
    fontSize: 20, // Tamaño manual para size_lg
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'Arial-BoldMT', // Fuente manual para font_bold
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2, // Grosor de la línea inferior
    borderBottomColor: '#7539e5', // Color de la línea inferior (primary color)
    marginBottom: 10, // Margen inferior
  },
  tableHeaderText: {
    fontSize: 16, // Tamaño manual para size_base
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'Arial-BoldMT', // Fuente manual para font_bold
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 0.5)',
  },
  tableCell: {
    fontSize: 16, // Tamaño manual para size_base
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'ArialMT', // Fuente manual para font_base
    flex: 1,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button1: {
    flex: 2.2,
    paddingVertical: 15,
    backgroundColor: Color.purple1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 3
  },
  button2: {
    flex: 0.8,
    paddingVertical: 15,
    backgroundColor: Color.purple1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontSize: 16,
  },
});


export const crearstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: '5%',
    width: '85%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    color: '#FFF',
  },
  Button: {
    backgroundColor: Color.purple1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: '5%',
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const editarstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
  button: {
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    height: '14%',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF', // Fondo blanco para contraste
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF', // Texto blanco
  },
  exerciseItem: {
    marginBottom: 20,
  },
  buttonchueco: {
    backgroundColor: '#4287f5', // Azul más claro para contraste
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  exerciseText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exerciseList: {
    flexGrow: 1,
  },
  exercisePText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFFFFF', // Texto blanco
  },
  botongift: {
    backgroundColor: Color.purple1, // Azul más claro para contraste
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  exerciseContainer: {
    marginBottom: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  removeButton: {
    backgroundColor: '#7539e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
    
  },
  removeButtonD: {
    backgroundColor: '#7539e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
    
  },
  removeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    color: '#FFFFFF',
  },
  savebutton: {
    backgroundColor: '#4287f5', // Azul más claro para contraste
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#4287f5', // Azul más claro para contraste
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    width : '80%',
  },
  addButtonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  setContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    marginBottom: 10,
    marginLeft: '0%', // Mantén el margen izquierdo en 20
    marginRight: '9%'
  },
  gradient:{
    
    marginVertical: 10,
    borderRadius: 10,
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5%',
  },
  
  
});

export const trainingstyles = StyleSheet.create({
  contenido: {
    flex: 1,
    marginTop: '5%',
    width: '85%',
    alignSelf: 'center',
  },
  planTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 5,
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
    marginBottom: 60
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
    marginVertical: 10,

    paddingBottom: 20,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Color.purple1,
  },
  exerciseHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // Color morado para el nombre del ejercicio
    marginBottom: 5,
    fontFamily: 'Arial-BoldMT',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2CAF9',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
  },
  tableCell: {
    fontSize: 20,
    marginHorizontal: 15,
    color: '#FFFFFF', // Texto blanco para el contenido de la tabla
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
    fontWeight: 'bold'
  },
  tableCellInput: {
    height: 35,
    borderColor: '#FFFFFF', // Borde blanco para los inputs de la tabla
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    color: '#FFFFFF', // Texto blanco para los inputs de la tabla
    backgroundColor: '#000000', // Fondo negro para los inputs de la tabla
    flex: 1,
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#4A0D66',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});