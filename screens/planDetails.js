import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import { database } from "../firebaseConfig";
import { planstyles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

export default function PlanDetails({ route, navigation }) {
  const { planId } = route.params;
  const [planDetails, setPlanDetails] = useState(null);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userId = user.id; // Reemplaza esto con el ID del usuario actualmente autenticado
    const planRef = database.ref(`users/${userId}/exercisePlans/${planId}`);

    planRef.once('value')
      .then(snapshot => {
        setPlanDetails(snapshot.val());
      })
      .catch(error => {
        console.error("Error fetching plan details:", error);
      });
  }, [planId]);

  if (!planDetails) {
    return (
      <View style={globalstyles.background}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded);
  };

  return (
    <View style={globalstyles.background}>
      <ScrollView style={globalstyles.contenido}>
        <Text style={planstyles.planTitle}>{planDetails.title}</Text>
        <View style={planstyles.descriptionContainer}>
          <Text 
            style={planstyles.planDescription} 
            numberOfLines={descriptionExpanded ? null : 1}
          >
            {planDetails.description}
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={planstyles.moreButton}>{descriptionExpanded ? " menos" : " más"}</Text>
          </TouchableOpacity>
        </View>
        {planDetails.exercises ? (
          Object.keys(planDetails.exercises).map(exerciseId => {
            const exercise = planDetails.exercises[exerciseId];
            if (exercise) {
              return (
                <View key={exerciseId} style={planstyles.exerciseContainer}>
                  <Text style={planstyles.exerciseName}>{exercise.name}</Text>
                  {exercise.sets && exercise.sets.map((set, index) => (
                    <View key={index}>
                      <Text style={planstyles.exerciseDetails}>Set {index + 1}</Text>
                      <Text style={planstyles.exerciseDetails}>Repetitions: {set.reps}</Text>
                      <Text style={planstyles.exerciseDetails}>Weight: {set.weight}</Text>
                    </View>
                  ))}
                </View>
              );
            }
            return null;
          })
        ) : (
          <Text>No hay ejercicios en este plan.</Text>
        )}
        {/* Botón para agregar ejercicio */}
        <Button
          title="Editar Plan"
          onPress={() => navigation.navigate('EditarPlan', { planId })}
        />
      </ScrollView>
    </View>
  );
}
