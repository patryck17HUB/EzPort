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
      backgroundColor: '#fff',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    createButton: {
      padding: 8,
      backgroundColor: '#007bff',
      borderRadius: 4,
    },
    createButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    planButton: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#ddd',
        borderRadius: 10,
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export const planstyles = StyleSheet.create({
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  planDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    flexShrink: 1,  // Permitir que el texto se ajuste en el contenedor
  },
  exerciseContainer: {
    marginBottom: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  exerciseDetails: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  moreButton: {
    color: '#0000FF',  // Color del texto del botón
    fontSize: 14,      // Tamaño de la fuente
    textDecorationLine: 'underline', // Subrayar el texto
    marginLeft: 5,     // Margen izquierdo para separar del texto
    flexShrink: 0,     // No permitir que el botón se ajuste en el contenedor
  },
  descriptionContainer: {
    flexDirection: 'row', // Colocar los elementos en la misma fila
    alignItems: 'center', // Alinear verticalmente los elementos
    flexWrap: 'wrap', // Permitir que el texto y el botón se ajusten a la pantalla
  },
});


export const crearstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    backgroundColor: '#4287f5', // Azul más claro para contraste
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