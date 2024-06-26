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
  buttonContainer: {
    flexDirection: 'row', // Establece la dirección de los elementos en fila
    justifyContent: 'space-between', // Distribuye los elementos horizontalmente
    width: '80%', // Ancho del contenedor, ajusta según sea necesario
    marginTop: 20, // Espaciado superior, ajusta según sea necesario
    alignSelf: 'center', // Alinea el contenedor al centro horizontalmente
  },

  historyButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
 
  logoutButtonText: {
      fontSize: FontSize.size_base,
      color: '#FFFFFF',
      fontFamily: FontFamily.font_base,
  },
  userInfoSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
    padding: 20, // Espaciado interno
    borderRadius: 10, // Bordes redondeados
    marginBottom: 20, // Espaciado inferior
  },
});

export const historystyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: '85%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  planContainer: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseContainer: {
    marginBottom: 10,
    padding: 10,
    marginTop: '5%',
  },
  exerciseName: {
    fontSize: 20, // Tamaño manual para size_lg
    color: '#FFFFFF', // Color manual para blanco
    fontFamily: 'Arial-BoldMT', // Fuente manual para font_bold
    marginBottom: 10,
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
  },
  setDetails: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  noProfileText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  dateTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});