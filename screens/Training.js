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
        const planData = snapshot.val();
        setPlanDetails(planData);
        if (planData && planData.exercises) {
          const repsSets = {};
          Object.keys(planData.exercises).forEach(exerciseId => {
            const exercise = planData.exercises[exerciseId];
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
        title: planDetails.title,
        exercises: exerciseRepsSets
      });

      alert("Training completed and saved in the history!");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving exercise history:", error);
      alert("Error saving exercise history");
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
      <ScrollView style={trainingstyles.contenido}>
        <Text style={trainingstyles.planTitle}>{planDetails.title}</Text>
        {Object.keys(planDetails.exercises).map((exerciseId, index) => {
          const exercise = planDetails.exercises[exerciseId];
          return (
            <View key={exerciseId}>
              <Text style={trainingstyles.exerciseHeader}>{exercise.name}</Text>
              <View style={trainingstyles.tableContainer}>
                <View style={trainingstyles.tableRow}>
                  <Text style={trainingstyles.tableHeader}>Set</Text>
                  <Text style={trainingstyles.tableHeader}>Reps</Text>
                  <Text style={trainingstyles.tableHeader}>Weight</Text>
                </View>
                {exerciseRepsSets[exerciseId] && exerciseRepsSets[exerciseId].sets.map((set, setIndex) => (
                  <View key={setIndex} style={trainingstyles.tableRow}>
                    <Text style={trainingstyles.tableCell}>{setIndex + 1}</Text>
                    <TextInput
                      style={trainingstyles.tableCellInput}
                      value={set.reps}
                      onChangeText={(value) => handleInputChange(exerciseId, setIndex, 'reps', value)}
                      keyboardType="numeric"
                    />
                    <TextInput
                      style={trainingstyles.tableCellInput}
                      value={set.weight}
                      onChangeText={(value) => handleInputChange(exerciseId, setIndex, 'weight', value)}
                      keyboardType="numeric"
                    />
                  </View>
                ))}
              </View>
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
