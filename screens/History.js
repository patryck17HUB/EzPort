import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { database } from "../firebaseConfig";
import { historystyles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

const History = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userId = user.id;
    const historyRef = database.ref(`users/${userId}/history`);

    historyRef.once('value')
      .then(snapshot => {
        const historyData = snapshot.val();
        if (historyData) {
          const historyList = Object.keys(historyData).map(key => ({
            id: key,
            ...historyData[key]
          }));
          setHistory(historyList);
        }
      })
      .catch(error => {
        console.error("Error fetching history:", error);
      });
  }, [user]);

  return (
    <View style={globalstyles.background}>
      <Text style={historystyles.title}>Historial de Entrenamientos</Text>
      <ScrollView style={historystyles.scrollContainer}>
        {history.length > 0 ? (
          history.map(plan => (
            <View key={plan.id} style={historystyles.planContainer}>
              <Text style={historystyles.planTitle}>{plan.title}</Text>
              {plan.exercises ? (
                Object.keys(plan.exercises).map(exerciseId => {
                  const exercise = plan.exercises[exerciseId];
                  if (exercise) {
                    return (
                      <View key={exerciseId} style={historystyles.exerciseContainer}>
                        <Text style={historystyles.exerciseName}>{exercise.name}</Text>
                        {exercise.sets && exercise.sets.map((set, index) => (
                          <View key={index} style={historystyles.setRow}>
                            <Text style={historystyles.setDetails}>Set {index + 1}</Text>
                            <Text style={historystyles.setDetails}>Repeticiones: {set.reps}</Text>
                            <Text style={historystyles.setDetails}>Peso: {set.weight}</Text>
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
            </View>
          ))
        ) : (
          <Text>No hay historial disponible.</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default History;