import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Button, TouchableOpacity, Alert } from "react-native";
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
    const userId = user.id;
    const planRef = database.ref(`users/${userId}/exercisePlans/${planId}`);

    const handlePlanData = (snapshot) => {
      setPlanDetails(snapshot.val());
    };

    planRef.on('value', handlePlanData); // Subscribe to changes

    return () => {
      planRef.off('value', handlePlanData); // Unsubscribe on component unmount
    };
  }, [planId]);

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded);
  };

  if (!planDetails) {
    return (
      <View style={globalstyles.background}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const handleRecordTrainingPress = () => {
    if (!planDetails.exercises || Object.keys(planDetails.exercises).length === 0) {
      Alert.alert("Add exercises to start a training");
    } else {
      navigation.navigate('Training', { planId });
    }
  };

  return (
    <View style={globalstyles.background}>
      <ScrollView style={planstyles.scrollContainer}>
        <Text style={planstyles.planTitle}>{planDetails.title}</Text>
        <View style={planstyles.descriptionContainer}>
          {planDetails.description && (
            <>
              <Text 
                style={planstyles.planDescription} 
                numberOfLines={descriptionExpanded ? null : 1}
              >
                {planDetails.description}
              </Text>
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={planstyles.moreButton}>{descriptionExpanded ? " less" : " more"}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={planstyles.buttonRow}>
          <TouchableOpacity 
            style={planstyles.button1}
            onPress={handleRecordTrainingPress}
          >
            <Text style={planstyles.buttonText}>Record Training</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={planstyles.button2}
            onPress={() => navigation.navigate('EditarPlan', { planId })}
          >
            <Text style={planstyles.buttonText}>Modify</Text>
          </TouchableOpacity>
        </View>
        {planDetails.exercises ? (
          Object.keys(planDetails.exercises).map(exerciseId => {
            const exercise = planDetails.exercises[exerciseId];
            if (exercise) {
              return (
                <View key={exerciseId} style={planstyles.exerciseContainer}>
                  <Text style={planstyles.exerciseName}>{exercise.name}</Text>
                  <View style={planstyles.tableHeader}>
                    <Text style={planstyles.tableHeaderText}>Set</Text>
                    <Text style={planstyles.tableHeaderText}>Reps</Text>
                    <Text style={planstyles.tableHeaderText}>Weight</Text>
                  </View>
                  {exercise.sets && exercise.sets.map((set, index) => (
                    <View key={index} style={planstyles.tableRow}>
                      <Text style={planstyles.tableCell}>{index + 1}</Text>
                      <Text style={planstyles.tableCell}>{set.reps}</Text>
                      <Text style={planstyles.tableCell}>{set.weight}</Text>
                    </View>
                  ))}
                </View>
              );
            }
            return null;
          })
        ) : (
          <Text>There are no exercises in this workout.</Text>
        )}
      </ScrollView>
    </View>
  );
}
