import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { database } from "../firebaseConfig";
import { trainingstyles } from "../styles/workoutsstyles"; // Asegúrate de que esto sea correcto
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

export default function Training({ route, navigation }) {
  const { planId } = route.params;
  const { user } = useContext(UserContext);
  const [planDetails, setPlanDetails] = useState(null);
  const [exerciseRepsSets, setExerciseRepsSets] = useState({});

  useEffect(() => {
    const userId = user.id;
    const planRef = database.ref(`users/${userId}/exercisePlans/${planId}`);

    planRef.once('value')
      .then(snapshot => {
        setPlanDetails(snapshot.val());
        if (snapshot.val() && snapshot.val().exercises) {
          const repsSets = {};
          Object.keys(snapshot.val().exercises).forEach(exerciseId => {
            const exercise = snapshot.val().exercises[exerciseId];
            const sets = exercise.sets || [];
            repsSets[exerciseId] = {
              name: exercise.name,
              bodyPart: exercise.bodyPart,
              sets: sets.map(set => ({ reps: set.reps.toString(), weight: set.weight.toString() }))
            };
          });
          setExerciseRepsSets(repsSets);
        }
      })
      .catch(error => {
        console.error("Error fetching plan details:", error);
      });
  }, [planId]);

  const handleInputChange = (exerciseId, setIndex, field, value) => {
    setExerciseRepsSets(prevState => {
      const updatedSets = [...prevState[exerciseId].sets];
      updatedSets[setIndex] = {
        ...updatedSets[setIndex],
        [field]: value
      };
      return {
        ...prevState,
        [exerciseId]: {
          ...prevState[exerciseId],
          sets: updatedSets
        }
      };
    });
  };

  const handleFinishTraining = async () => {
    try {
      const userId = user.id;
      const today = new Date();
      const dateKey = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      const historyRef = database.ref(`users/${userId}/exerciseHistory/${dateKey}`).push();

      await historyRef.set({
        planId,
        exercises: exerciseRepsSets
      });

      alert("Entrenamiento terminado y guardado en el historial!");
      navigation.goBack();
    } catch (error) {
      console.error("Error guardando el historial de ejercicio:", error);
      alert("Error guardando el historial de ejercicio");
    }
  };

  if (!planDetails) {
    return (
      <View style={globalstyles.background}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={globalstyles.background}>
      <ScrollView style={globalstyles.contenido}>
        <Text style={trainingstyles.planTitle}>{planDetails.title}</Text>
        {Object.keys(planDetails.exercises).map(exerciseId => {
          const exercise = planDetails.exercises[exerciseId];
          return (
            <View key={exerciseId} style={trainingstyles.exerciseContainer}>
              <Text style={trainingstyles.exerciseName}>{exercise.name}</Text>
              {exerciseRepsSets[exerciseId] && exerciseRepsSets[exerciseId].sets.map((set, index) => (
                <View key={index}>
                  <Text style={trainingstyles.exerciseDetails}>Set {index + 1}</Text>
                  <TextInput
                    style={trainingstyles.input}
                    placeholder={`Reps: ${set.reps}`}
                    value={set.reps}
                    onChangeText={(value) => handleInputChange(exerciseId, index, 'reps', value)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={trainingstyles.input}
                    placeholder={`Weight: ${set.weight}`}
                    value={set.weight}
                    onChangeText={(value) => handleInputChange(exerciseId, index, 'weight', value)}
                    keyboardType="numeric"
                  />
                </View>
              ))}
            </View>
          );
        })}
        <TouchableOpacity style={trainingstyles.finishButton} onPress={handleFinishTraining}>
          <Text style={trainingstyles.finishButtonText}>Finish Training</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}