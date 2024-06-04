import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { database } from "../firebaseConfig";
import { historystyles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

const History = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userId = user.id;
    const historyRef = database.ref(`users/${userId}/exerciseHistory`);

    historyRef.once('value')
      .then(snapshot => {
        const historyData = snapshot.val();
        if (historyData) {
          setHistory(historyData);
        }
      })
      .catch(error => {
        console.error("Error fetching history:", error);
      });
  }, [user]);

  return (
    <View style={globalstyles.background}>
      <ScrollView style={historystyles.scrollContainer}>
        {history && Object.keys(history).length > 0 ? (
          Object.keys(history).map((date, dateIndex) => (
            <View key={dateIndex}>
              <Text style={historystyles.dateTitle}>Fecha: {date}</Text>
              {Object.keys(history[date]).map((planId, planIndex) => {
                const plan = history[date][planId];
                return (
                  <View key={planIndex} style={historystyles.planContainer}>
                    <Text style={historystyles.planTitle}>Plan: {plan.title}</Text>
                    {plan && plan.exercises && Object.keys(plan.exercises).length > 0 ? (
                      Object.keys(plan.exercises).map((exerciseId, exerciseIndex) => {
                        const exercise = plan.exercises[exerciseId];
                        return (
                          <View key={exerciseIndex} style={historystyles.exerciseContainer}>
                            <Text style={historystyles.exerciseName}>{exercise.name}</Text>
                            {exercise.sets && exercise.sets.map((set, setIdx) => (
                              <View key={setIdx} style={historystyles.setRow}>
                                <Text style={historystyles.setDetails}>Set {setIdx + 1}</Text>
                                <Text style={historystyles.setDetails}>Repeticiones: {set.reps}</Text>
                                <Text style={historystyles.setDetails}>Peso: {set.weight}</Text>
                              </View>
                            ))}
                          </View>
                        );
                      })
                    ) : (
                      <Text>No hay ejercicios en este plan.</Text>
                    )}
                  </View>
                );
              })}
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
