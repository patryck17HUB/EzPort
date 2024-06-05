import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { crearstyles } from "../styles/workoutsstyles";
import { UserContext } from '../context/UserContext';

export default function CreatePlan({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);

  const handleCreatePlan = () => {
    if (title.trim() === "") {
      Alert.alert("Add a name to the workout");
      return;
    }

    const userId = user.id; // Reemplaza esto con el ID del usuario actualmente autenticado
    const userRef = database.ref(`users/${userId}`);

    userRef.child('planCounter').transaction(currentCounter => {
      if (currentCounter === null) {
        return 1; // Si no existe, inicializar a 1
      }
      return currentCounter + 1;
    }, (error, committed, snapshot) => {
      if (error) {
        console.error("Error incrementing plan counter:", error);
      } else if (committed) {
        const newPlanId = snapshot.val();
        const newPlanRef = userRef.child(`exercisePlans/plan${newPlanId}`);
        const newPlan = {
          title,
          description,
          exercises: {}
        };

        newPlanRef.set(newPlan, (error) => {
          if (error) {
            console.error("Error creating new plan:", error);
          } else {
            navigation.navigate('EditarPlan', { planId: `plan${newPlanId}` });
          }
        });
      }
    });
  };

  return (
    <View style={globalstyles.background}>
      <View style={crearstyles.container}>
        <Text style={crearstyles.label}>Workout Name</Text>
        <TextInput
          style={crearstyles.input}
          value={title}
          maxLength={25}
          onChangeText={setTitle}
        />
        <Text style={crearstyles.label}>Description (optional)</Text>
        <TextInput
          style={crearstyles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity
          style={crearstyles.Button}
          onPress={handleCreatePlan}
        >
          <Text style={crearstyles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
