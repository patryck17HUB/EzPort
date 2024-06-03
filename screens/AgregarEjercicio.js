import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, Image, ScrollView, Alert } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { editarstyles } from "../styles/workoutsstyles";
import { getMuscle, getExerciseByID } from '../api/user_api';
import { UserContext } from '../context/UserContext';

const handleGetMuscle = async (muscle, setExercises) => {
  try {
    const response = await getMuscle(muscle);
    setExercises(response.data);
  } catch (error) {
    console.error("Error fetching muscle details:", error);
  }
};

const handleGetExerciseDetails = async (id, name, setExerciseDetails, setModalVisible) => {
  try {
    const response = await getExerciseByID(id);
    setExerciseDetails({ ...response.data, name });
    setModalVisible(true);
  } catch (error) {
    console.error("Error fetching exercise details:", error);
  }
};

const agregarARutina = async (user, exerciseDetails, planId, navigation) => {
  try {
    const userId = user.id;
    const userRef = database.ref(`users/${userId}`);
    userRef.child(`exercisePlans/${planId}/exercises`).push(exerciseDetails, (error) => {
      if (error) {
        console.error("Error al agregar ejercicio:", error);
      } else {
        console.log("Ejercicio agregado a la rutina!");
        Alert.alert("Ejercicio agregado a la rutina!");
        navigation.goBack();
      }
    });
  } catch (error) {
    console.error("Error agregando ejercicio a la rutina:", error);
    alert("Error agregando ejercicio a la rutina");
  }
};

const AgregarEjercicio = ({ route, navigation }) => {
  const { planId } = route.params;
  const { user } = useContext(UserContext);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

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
    handleGetMuscle(muscle, setExercises);
  };

  const handleSelectExercise = (id, name) => {
    handleGetExerciseDetails(id, name, setExerciseDetails, setDetailModalVisible);
  };

  const renderExerciseItem = ({ item }) => (
    <View style={editarstyles.exerciseItem}>
      <TouchableOpacity style={editarstyles.buttonchueco} onPress={() => handleSelectExercise(item.id, item.name)}>
        <Text style={editarstyles.exerciseText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={globalstyles.background}>
      <View style={globalstyles.contenido}>
        <TouchableOpacity style={editarstyles.button} onPress={toggleModal}>
          <Text style={editarstyles.buttonText}>Seleccionar grupo muscular</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={editarstyles.modalContainer}>
            <ScrollView contentContainerStyle={editarstyles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => (
                  <TouchableOpacity style={editarstyles.option} onPress={() => handleSelectMuscle(item.label)}>
                    <Text style={editarstyles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
        </Modal>

        {exercises.length > 0 && (
          <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            renderItem={renderExerciseItem}
            contentContainerStyle={editarstyles.exerciseList}
          />
        )}

        {exerciseDetails && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={detailModalVisible}
            onRequestClose={toggleDetailModal}
          >
            <View style={editarstyles.modalContainer}>
              <ScrollView contentContainerStyle={editarstyles.modalContent}>
                <Text style={editarstyles.exercisePText}>Nombre: {exerciseDetails.name}</Text>
                <Text style={editarstyles.exercisePText}>Equipo: {exerciseDetails.equipment}</Text>
                <Text style={editarstyles.exercisePText}>Target: {exerciseDetails.target}</Text>
                <Image
                  source={{ uri: exerciseDetails.gifUrl }}
                  style={{ width: 200, height: 200 }}
                />
                <TouchableOpacity style={editarstyles.botongift} onPress={toggleDetailModal}>
                  <Text style={editarstyles.exerciseText}>Cerrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={editarstyles.botongift} onPress={() => agregarARutina(user, exerciseDetails, planId, navigation)}>
                  <Text style={editarstyles.exerciseText}>Agregar a rutina</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

export default AgregarEjercicio;
