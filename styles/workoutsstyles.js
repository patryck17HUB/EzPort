import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollimage: {
    flexGrow: 1,
    marginBottom: '17%',
    width: '100%',
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // asegura que la imagen ocupe toda la anchura disponible
    height: '100%', // ajusta la altura según sea necesario
  },
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
      backgroundColor: '#7539e5',
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
    planButton: {
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
});

export const planstyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    marginBottom: '17%',
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
    backgroundColor: '#7539e5',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 3
  },
  button2: {
    flex: 0.8,
    paddingVertical: 15,
    backgroundColor: '#7539e5',
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
    backgroundColor: '#7539e5',
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000', // Fondo negro
  },
  button: {
    backgroundColor: '#4287f5', // Azul más claro para contraste
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
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
    backgroundColor: '#7539e5', // Azul más claro para contraste
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
    backgroundColor: 'red',
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
  },
});

export const trainingstyles = StyleSheet.create({
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  exerciseContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseDetails: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  finishButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});