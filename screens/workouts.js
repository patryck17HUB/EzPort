import React, {useState} from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput, } from "react-native";
import { getMuscleList, getMuscle } from "../api/user_api";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function Workouts({ navigation }) {
  const [muscle, setMuscle] = useState("");

  const handleGetMuscle = async () => {
    try {
      const response = await getMuscle(muscle); // Llamada a la función getMuscle con el nombre del músculo
      console.log("Muscle details:", response.data);
      // Handle the muscle data as needed
    } catch (error) {
      console.error("Error fetching muscle details:", error);
      // Handle errors
    }
  };

  return (
    <View style={globalstyles.background}>

      <ScrollView style={globalstyles.contenido}>
        <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Enter muscle name"
          value={muscle}
          onChangeText={(text) => setMuscle(text)}
          placeholderTextColor={"#FFFFFF"}
        />
        <TouchableOpacity style={styles.button} onPress={handleGetMuscle}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={getMuscleList}>
          <Text style={styles.buttonText}>Get Muscle List</Text>
        </TouchableOpacity>

        </View>
      </ScrollView> 

    </View>
  );
}