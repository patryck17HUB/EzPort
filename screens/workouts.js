import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { getMuscleList } from "../components/musclelistfunctions";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function Workouts({ navigation }) {
  return (
    <View style={globalstyles.background}>

      <ScrollView style={[globalstyles.contenido]}>

        <TouchableOpacity style={styles.button}
          onPress={(getMuscleList)}>
          <Text style={styles.muscleList}>Obtener lista</Text>
        </TouchableOpacity>

      </ScrollView> 

    </View>
  );
}