import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { database } from "../firebaseConfig";
import { planstyles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function PlanDetails({ route }) {
  const { planId } = route.params;
  const [planDetails, setPlanDetails] = useState(null);

  useEffect(() => {
    const userId = "userId1"; // Reemplaza esto con el ID del usuario actualmente autenticado
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

  return (
    <View style={globalstyles.background}>
      <ScrollView style={globalstyles.contenido}>
        <Text style={planstyles.planTitle}>{planDetails.title}</Text>
        <Text style={planstyles.planDescription}>{planDetails.description}</Text>
        {Object.keys(planDetails.exercises).map(exerciseId => (
          <View key={exerciseId} style={planstyles.exerciseContainer}>
            <Text style={planstyles.exerciseName}>{planDetails.exercises[exerciseId].name}</Text>
            <Text style={planstyles.exerciseDetails}>Repetitions: {planDetails.exercises[exerciseId].repetitions}</Text>
            <Text style={planstyles.exerciseDetails}>Sets: {planDetails.exercises[exerciseId].sets}</Text>
            <Text style={planstyles.exerciseDetails}>Rest Time: {planDetails.exercises[exerciseId].restTime}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
