import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Modal, FlatList, TouchableOpacity, Image,useWindowDimensions, } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { crearstyles } from "../styles/workoutsstyles";
import { getMuscle, getMuscleList, getExerciseByID } from '../api/user_api';
import { styles } from "../styles/explorestyles";

const handleGetMuscle = async (muscle, setExercises) => {
try {
    const response = await getMuscle(muscle); // Llamada a la función getMuscle con el nombre del músculo
    console.log("Muscle details:", response.data);
    setExercises(response.data); // Guardar la respuesta en el estado
} catch (error) {
    console.error("Error fetching muscle details:", error);
    // Handle errors
}
};
  
const handleGetExerciseDetails = async (id, setExerciseDetails, setModalVisible) => {
try {
const response = await getExerciseByID(id); // Llamada a la función getExerciseByID con el ID del ejercicio
console.log("Exercise details:", response.data);
setExerciseDetails(response.data); // Guardar los detalles del ejercicio en el estado
setModalVisible(true); // Mostrar el modal con los detalles del ejercicio
} catch (error) {
console.error("Error fetching exercise details:", error);
// Handle errors
}
};

const agregarARutina = async (exerciseDetails, planId) => {
    try {
        const userId = "userId1";
        const userRef = database.ref(`users/${userId}`);

        console.log(`Agregar ejercicio ${exerciseDetails.name} al plan ${planId}`);

        userRef.child(`exercisePlans/${planId}/exercises/exerciseCounter`).transaction(currentCounter => {
            if (currentCounter === null) {
                return 1;
            }
            return currentCounter + 1;
        }, (error, committed, snapshot) => {
            if (error) {
                console.error("Error incrementando el contador de ejercicios:", error);
            } else if (committed) {
                const newExId = snapshot.val();
                const newExRef = userRef.child(`exercisePlans/${planId}/exercises/exercise${newExId}`);

                newExRef.set(exerciseDetails, (error) => {
                    if (error) {
                        console.error("Error al agregar ejercicio:", error);
                    } else {
                        console.log("Ejercicio agregado a la rutina!");
                        alert("Ejercicio agregado a la rutina!");
                    }
                });
            }
        });
    } catch (error) {
        console.error("Error agregando ejercicio a la rutina:", error);
        alert("Error agregando ejercicio a la rutina");
    }
};


export default function AgregarEjercicios({ route, navigation }) {
  const { planId } = route.params;

  //Busqueda de musculo
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false); // Estado para el modal de detalles del ejercicio
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]); // Estado para almacenar los ejercicios
  const [exerciseDetails, setExerciseDetails] = useState(null); // Estado para almacenar los detalles del ejercicio

  const options = [
    { label: 'back' },
    { label: 'cardio' },
    { label: 'chest' },
    { label: 'lower arms' },
    { label: 'lower legs' },
    { label: 'neck' },
    { label: 'shoulders' },
    { label: 'upper arms' },
    { label: 'upper legs' },
    { label: 'waist' },
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDetailModal = () => {
    setDetailModalVisible(!detailModalVisible);
  };

  const handleSelectMuscle = (muscle) => {
    setSelectedMuscle(muscle);
    toggleModal();
    handleGetMuscle(muscle, setExercises); // Call handleGetMuscle with the selected muscle and setExercises
  };

  const handleSelectExercise = (id) => {
    handleGetExerciseDetails(id, setExerciseDetails, setDetailModalVisible); // Call handleGetExerciseDetails with the selected exercise ID
  };

  // Botones de cada ejercicio
  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseItem}>
      <TouchableOpacity style={styles.buttonchueco} onPress={() => handleSelectExercise(item.id)}>
        <Text style={styles.exerciseText}>{item.name}</Text>
        
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={globalstyles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Buscar grupo musuclar</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.option} onPress={() => handleSelectMuscle(item.label)}>
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        
      {exercises.length > 0 && (
        
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={renderExerciseItem}
          contentContainerStyle={styles.exerciseList}
        />
        
      )}

        
      </View>
      {exerciseDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={detailModalVisible}
          onRequestClose={toggleDetailModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.exercisePText}>Nombre: {exerciseDetails.name}</Text>
              <Text style={styles.exercisePText}>Equipo: {exerciseDetails.equipment}</Text>
              <Text style={styles.exercisePText}>Target: {exerciseDetails.target}</Text>
              <Image
              source={{ uri: exerciseDetails.gifUrl }}
              style={{ width: 200, height: 200 }}
              />
                <TouchableOpacity style={styles.botongift} onPress={toggleDetailModal}>
                    <Text style={styles.exerciseText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botongift} onPress={() => agregarARutina(exerciseDetails, planId)}>
                    <Text style={styles.exerciseText}>Agregar a rutina</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      
      
    </View>
    
  );
}
