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
    const newPlanRef = database.ref(`users/${userId}/exercisePlans`).push();
    const newPlan = {
      title,
      description,
      exercises: {} // Aquí podrías agregar la estructura inicial de los ejercicios
    };
    newPlanRef.set(newPlan, (error) => {
      if (error) {
        console.error("Error creating new plan:", error);
      } else {
        navigation.goBack();
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
