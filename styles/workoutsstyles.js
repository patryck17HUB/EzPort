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
    },
    planDescription: {
      fontSize: 16,
      marginBottom: 20,
    },
    exerciseContainer: {
      marginBottom: 15,
    },
    exerciseName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    exerciseDetails: {
      fontSize: 16,
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