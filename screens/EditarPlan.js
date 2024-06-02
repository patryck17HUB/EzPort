import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Button, Modal, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { crearstyles, planstyles } from "../styles/workoutsstyles";
import { getMuscle, getMuscleList, getExerciseByID } from '../api/user_api';
import { editarstyles } from "../styles/workoutsstyles";
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
const agregarARutina = async (user, exerciseDetails, planId, setPlanDetails) => {
  try {
    const userId = user.id;
    const userRef = database.ref(`users/${userId}`);
    userRef.child(`exercisePlans/${planId}/exercises`).push(exerciseDetails, (error) => {
      if (error) {
        console.error("Error al agregar ejercicio:", error);
      } else {
        console.log("Ejercicio agregado a la rutina!");
        alert("Ejercicio agregado a la rutina!");
        // Fetch updated plan details
        userRef.child(`exercisePlans/${planId}`).once('value')
          .then(snapshot => {
            setPlanDetails(snapshot.val());
          });
      }
    });
  } catch (error) {
    console.error("Error agregando ejercicio a la rutina:", error);
    alert("Error agregando ejercicio a la rutina");
  }
};

const handleSaveChanges = (user, planId, exerciseRepsSets, setChangesSaved) => {
  try {
    // Guardar los cambios en la base de datos
    const userId = user.id;
    const userRef = database.ref(`users/${userId}/exercisePlans/${planId}/exercises`);
    Object.keys(exerciseRepsSets).forEach((exerciseId) => {
      const sets = exerciseRepsSets[exerciseId].map(set => ({ reps: parseInt(set.reps), weight: parseInt(set.weight) }));
      userRef.child(exerciseId).update({ sets });
    });
    setChangesSaved(true);
    alert("Cambios guardados correctamente");
  } catch (error) {
    console.error("Error guardando cambios:", error);
    alert("Error al guardar cambios");
  }
};

const handleRemoveExercise = async (user, exerciseId, planId, setChangesSaved) => {
  try {
    const userId = user.id;
    await database.ref(`users/${userId}/exercisePlans/${planId}/exercises/${exerciseId}`).remove();
    alert("Ejercicio eliminado de la rutina");
    setChangesSaved(false); // Indicar que se deben guardar los cambios nuevamente
  } catch (error) {
    console.error("Error eliminando ejercicio de la rutina:", error);
    alert("Error eliminando ejercicio de la rutina");
  }
};

const handleAddSet = (exerciseId, setExerciseRepsSets) => {
  setExerciseRepsSets(prevState => ({
    ...prevState,
    [exerciseId]: prevState[exerciseId] ? [...prevState[exerciseId], { reps: '', weight: '' }] : [{ reps: '', weight: '' }]
  }));
};

const handleRemoveSet = (exerciseId, setIndex, setExerciseRepsSets) => {
  setExerciseRepsSets(prevState => {
    const updatedSets = [...prevState[exerciseId]];
    updatedSets.splice(setIndex, 1);
    return { ...prevState, [exerciseId]: updatedSets };
  });
};

const EditarPlan = ({ route, navigation }) => {
  const { planId } = route.params;
  const { user } = useContext(UserContext);
  const [planDetails, setPlanDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [exerciseRepsSets, setExerciseRepsSets] = useState({});
  const [changesSaved, setChangesSaved] = useState(false);
  

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

  useEffect(() => {
    const userId = user.id;
    const planRef = database.ref(`users/${userId}/exercisePlans/${planId}`);
    
    planRef.once('value')
      .then(snapshot => {
        const planData = snapshot.val();
        if (planData && planData.exercises) {
          const repsSets = {};
          Object.keys(planData.exercises).forEach(exerciseId => {
            const sets = planData.exercises[exerciseId].sets || [];
            repsSets[exerciseId] = sets.map(set => ({ reps: set.reps.toString(), weight: set.weight.toString() }));
            // Aquí se mapean los sets existentes para convertir los valores a cadenas
          });
          setExerciseRepsSets(repsSets);
        }
        setPlanDetails(planData);
      })
      .catch(error => {
        console.error("Error fetching plan details:", error);
      });
  }, [planId]);
  
  

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

  const handleAddRepsSets = (exerciseId, setIndex, property, text) => {
    setExerciseRepsSets(prevState => {
      const updatedSets = [...prevState[exerciseId]];
      updatedSets[setIndex][property] = text;
      return { ...prevState, [exerciseId]: updatedSets };
    });
  };

const renderSetItem = (exerciseId, set, setIndex) => (
  <View key={setIndex} style={editarstyles.setContainer}>
    <Text>{setIndex + 1}</Text>
    <TextInput
      style={editarstyles.input}
      placeholder="Reps"
      keyboardType="numeric"
      placeholderTextColor={'#FFFFFF'}
      onChangeText={(text) => handleAddRepsSets(exerciseId, setIndex, 'reps', text)}
      value={set.reps}
    />
    <TextInput
      style={editarstyles.input}
      placeholder="Weight"
      keyboardType="numeric"
      placeholderTextColor={'#FFFFFF'}
      onChangeText={(text) => handleAddRepsSets(exerciseId, setIndex, 'weight', text)}
      value={set.weight}
    />
    <TouchableOpacity style={editarstyles.removeButton} onPress={() => handleRemoveSet(exerciseId, setIndex, setExerciseRepsSets)}>
      <Text style={editarstyles.removeButtonText}>Eliminar set</Text>
    </TouchableOpacity>
  </View>
);

const renderExerciseItem = ({ item }) => (
  <View style={editarstyles.exerciseItem}>
    <TouchableOpacity style={editarstyles.buttonchueco} onPress={() => handleSelectExercise(item.id, item.name)}>
      <Text style={editarstyles.exerciseText}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

if (!planDetails) {
  return (
    <View style={globalstyles.background}>
      <Text>Loading...</Text>
    </View>
  );
}

return (
  <View style={globalstyles.background}>
    <View style={globalstyles.contenido}>
      <TouchableOpacity style={editarstyles.button} onPress={toggleModal}>
        <Text style={editarstyles.buttonText}>Buscar grupo muscular</Text>
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
              <TouchableOpacity style={editarstyles.botongift} onPress={() => agregarARutina(user, exerciseDetails, planId, setPlanDetails)}>
                <Text style={editarstyles.exerciseText}>Agregar a rutina</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      )}

      <ScrollView>
        {planDetails.exercises && Object.keys(planDetails.exercises).map(exerciseId => (
          <View key={exerciseId} style={editarstyles.exerciseContainer}>
            <Text style={editarstyles.exerciseName}>{planDetails.exercises[exerciseId].name}</Text>
            {exerciseRepsSets[exerciseId] && exerciseRepsSets[exerciseId].map((set, setIndex) => renderSetItem(exerciseId, set, setIndex))}
            <TouchableOpacity style={editarstyles.addButton} onPress={() => handleAddSet(exerciseId, setExerciseRepsSets)}>
              <Text style={editarstyles.addButtonText}>Agregar set</Text>
            </TouchableOpacity>
            <TouchableOpacity style={editarstyles.removeButton} onPress={() => handleRemoveExercise(user, exerciseId, planId, setChangesSaved)}>
              <Text style={editarstyles.removeButtonText}>Eliminar ejercicio</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={editarstyles.savebutton} onPress={() => handleSaveChanges(user, planId, exerciseRepsSets, setChangesSaved)}>
        <Text style={editarstyles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

export default EditarPlan;
