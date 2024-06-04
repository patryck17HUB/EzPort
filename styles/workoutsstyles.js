import { ScrollView, StyleSheet } from "react-native";
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
  ScrollView: {
    width: '85%',
    alignSelf: 'center',
    flex: 1,
  },
  button: {
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    height: '14%',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradient: {
    marginVertical: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    width: '85%',
    paddingVertical: 8,
  },
  gradientsettouch:{
    backgroundColor: '#7539e5',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flex: 2.5, 
    paddingVertical: 17,
  },
  removeButton: {
    backgroundColor: '#7539e5',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flex: 1, 
    marginLeft: 10, 
  },
  exercisebuttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop: 5, 
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  },
  removeSetButton: {
    backgroundColor: '#7539e5', // Morado para contraste
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 10,
    width: '30%',
    marginBottom: '5%',
  },
  removeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  // Estilos para los ejercicios
  exerciseContainer: {
    marginBottom: 30,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    alignSelf: 'center',
  },
  setRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  setColumn: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    textAlign: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    color: '#FFFFFF',
    marginHorizontal: 5, 
  },
  gradientSetBottom: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10, // Ajusta la altura del gradiente
  },
  deleteButton: {
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    flex: 1,
    marginLeft: 10,
    overflow: 'hidden', 
  },
  savebutton: {
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    flex: 2.5,
    overflow: 'hidden', 
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bottom: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
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