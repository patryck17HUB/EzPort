import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { editarstyles } from "../styles/workoutsstyles";
import { UserContext } from '../context/UserContext';
import { LinearGradient } from 'expo-linear-gradient';

const handleSaveChanges = (user, planId, exerciseRepsSets, setChangesSaved, navigation) => {
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
    // Navegar de regreso a PlanDetails después de guardar los cambios
    navigation.navigate('PlanDetails', { planId });
  } catch (error) {
    console.error("Error guardando cambios:", error);
    alert("Error al guardar cambios");
  }
};

const handleDeletePlan = async (user, planId, navigation) => {
  try {
    const userId = user.id;
    await database.ref(`users/${userId}/exercisePlans/${planId}`).remove();
    alert("Plan eliminado correctamente");
    navigation.navigate('Workouts2'); // Asegúrate de que 'Workouts' sea el nombre correcto de la pantalla a la que quieres navegar
  } catch (error) {
    console.error("Error eliminando el plan:", error);
    alert("Error eliminando el plan");
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
  const [exerciseRepsSets, setExerciseRepsSets] = useState({});
  const [changesSaved, setChangesSaved] = useState(false);

  useEffect(() => {
    const userId = user.id;
    const planRef = database.ref(`users/${userId}/exercisePlans/${planId}`);
  
    const handlePlanData = (snapshot) => {
      const planData = snapshot.val();
      if (planData && planData.exercises) {
        const repsSets = {};
        Object.keys(planData.exercises).forEach(exerciseId => {
          const sets = planData.exercises[exerciseId].sets || [];
          repsSets[exerciseId] = sets.map(set => ({ reps: set.reps.toString(), weight: set.weight.toString() }));
        });
        setExerciseRepsSets(repsSets);
      }
      setPlanDetails(planData);
    };
  
    planRef.on('value', handlePlanData); // Subscribe to changes
  
    return () => {
      planRef.off('value', handlePlanData); // Unsubscribe on component unmount
    };
  }, [planId]);
  

  const handleAddRepsSets = (exerciseId, setIndex, property, text) => {
    setExerciseRepsSets(prevState => {
      const updatedSets = [...prevState[exerciseId]];
      updatedSets[setIndex][property] = text;
      return { ...prevState, [exerciseId]: updatedSets };
    });
  };

  const renderSetItem = (exerciseId, set, setIndex) => (
    <View key={setIndex} style={editarstyles.setRow}>
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
      <TouchableOpacity style={editarstyles.removeSetButton} onPress={() => handleRemoveSet(exerciseId, setIndex, setExerciseRepsSets)}>
        <Text style={editarstyles.removeButtonText}>Eliminar set</Text>
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
      <View style={editarstyles.container}>
        <TouchableOpacity style={editarstyles.button} onPress={() => navigation.navigate('AgregarEjercicio', { planId })}>
          <LinearGradient
            colors={['#9656D2', '#6300BF']}
            style={editarstyles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
            <Text style={editarstyles.buttonText}>Agregar Ejercicio</Text>
          </LinearGradient>
        </TouchableOpacity>

        <ScrollView style = {editarstyles.ScrollView} >
          {planDetails.exercises && Object.keys(planDetails.exercises).map(exerciseId => (
            <View key={exerciseId} style={editarstyles.exerciseContainer}>
              <Text style={editarstyles.exerciseName}>{planDetails.exercises[exerciseId].name}</Text>
              {exerciseRepsSets[exerciseId] && exerciseRepsSets[exerciseId].map((set, setIndex) => renderSetItem(exerciseId, set, setIndex))}
              
              <View style={editarstyles.exercisebuttons}>
              <TouchableOpacity style={editarstyles.gradientsettouch} onPress={() => handleAddSet(exerciseId, setExerciseRepsSets)}>

                <Text style={editarstyles.addButtonText}>Agregar set</Text>

              </TouchableOpacity>
              <TouchableOpacity style={editarstyles.removeButton} onPress={() => handleRemoveExercise(user, exerciseId, planId, setChangesSaved)}>
                <Text style={editarstyles.removeButtonText}>Eliminar ejercicio</Text>
              </TouchableOpacity>
              </View>

            </View>
          ))}
        </ScrollView>
        <View style={editarstyles.bottom}>
        <TouchableOpacity style={editarstyles.savebutton} onPress={() => handleSaveChanges(user, planId, exerciseRepsSets, setChangesSaved, navigation)}>
        <LinearGradient
                colors={['#9656D2', '#7539e5']}
                start={{x: 0, y: 0}}
                end={{x: .8, y: 0}}
                style={editarstyles.gradientSetBottom}
              >
          <Text style={editarstyles.buttonText}>Guardar Cambios</Text>
        </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={editarstyles.deleteButton} onPress={() => handleDeletePlan(user, planId, navigation)}>
        <LinearGradient
                colors={['#B40000', '#DE663A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={editarstyles.gradientSetBottom}
              >
          <Text style={editarstyles.deleteButtonText}>Eliminar Plan</Text>
        </LinearGradient>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default EditarPlan;
