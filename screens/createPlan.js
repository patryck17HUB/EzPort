import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { database } from "../firebaseConfig";
import { globalstyles } from "../styles/GlobalStyles";
import { crearstyles } from "../styles/workoutsstyles";

export default function CreatePlan({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlan = () => {
    const userId = "userId1"; // Reemplaza esto con el ID del usuario actualmente autenticado
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
            navigation.navigate('AgregarEjercicios', { planId: `plan${newPlanId}` });
          }
        });
      }
    });
  };

  return (
    <View style={globalstyles.background}>
      <View style={crearstyles.container}>
        <Text style={crearstyles.label}>Título del Plan</Text>
        <TextInput
          style={crearstyles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={crearstyles.label}>Descripción del Plan</Text>
        <TextInput
          style={crearstyles.input}
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Crear Plan" onPress={handleCreatePlan} />
      </View>
    </View>
  );
}
