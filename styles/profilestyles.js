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
      historyButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Color.primary,
        borderRadius: 5,
      },
      historyButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
    });

export const historystyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    marginBottom: '17%',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  planContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
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
    backgroundColor: '#444',
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
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
  historyButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#7539e5',
    borderRadius: 5,
  },
  historyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});