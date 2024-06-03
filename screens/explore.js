import * as React from 'react';
import { useState } from 'react';
import { View, useWindowDimensions, Text, Button, Modal, FlatList, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Color } from "../styles/GlobalStyles";

import { StatusBar } from 'expo-status-bar';
// Importación correcta de las funciones
import { getMuscle, getMuscleList, getExerciseByID } from '../api/user_api';


const Ejercicios = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const Rutinas = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const renderScene = SceneMap({
  Ejercicios: Ejercicios,
  Rutinas: Rutinas,
});

const handleGetMuscle = async (muscle, setExercises) => {
  try {
    const response = await getMuscle(muscle); // Llamada a la función getMuscle con el nombre del músculo
    console.log("Muscle details:", response.data);
    setExercises(response.data); // Guardar la respuesta en el estado
  } catch (error) {
    console.error("Error fetching muscle details:", error);
    // Handle errors
  }
};

const handleGetExerciseDetails = async (id, setExerciseDetails, setModalVisible) => {
  try {
    const response = await getExerciseByID(id); // Llamada a la función getExerciseByID con el ID del ejercicio
    console.log("Exercise details:", response.data);
    setExerciseDetails(response.data); // Guardar los detalles del ejercicio en el estado
    setModalVisible(true); // Mostrar el modal con los detalles del ejercicio
  } catch (error) {
    console.error("Error fetching exercise details:", error);
    // Handle errors
  }
};

export default function Explore({ navigation }) {

  //Busqueda de musculo
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false); // Estado para el modal de detalles del ejercicio
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]); // Estado para almacenar los ejercicios
  const [exerciseDetails, setExerciseDetails] = useState(null); // Estado para almacenar los detalles del ejercicio

  const options = [
    { label: 'back' },
    { label: 'cardio' },
    { label: 'chest' },
    { label: 'lower arms' },
    { label: 'lower legs' },
    { label: 'neck' },
    { label: 'shoulders' },
    { label: 'upper arms' },
    { label: 'upper legs' },
    { label: 'waist' },
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDetailModal = () => {
    setDetailModalVisible(!detailModalVisible);
  };

  const handleSelectMuscle = (muscle) => {
    setSelectedMuscle(muscle);
    toggleModal();
    handleGetMuscle(muscle, setExercises); // Call handleGetMuscle with the selected muscle and setExercises
  };

  const handleSelectExercise = (id) => {
    handleGetExerciseDetails(id, setExerciseDetails, setDetailModalVisible); // Call handleGetExerciseDetails with the selected exercise ID
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Ejercicios', title: 'Ejercicios' },
    { key: 'Rutinas', title: 'Rutinas' },
  ]);

  const dynamicTabBarStyle = (index) => ({
    margin: 0,
    backgroundColor: index === 0 ? Color.secondary : Color.secondary, // Dynamic color based on index
    top: 0,
    borderRadius: 0,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
        backgroundColor: 'white',
        width: '46%',
        left: '2.5%',
        right: '2.5%',
      }}
      style={dynamicTabBarStyle(index)}
      
      labelStyle={{ 
        color: 'white', 
      }}

      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 0 , fontSize: 16 }}>
          {route.title}
        </Text>
      )}
      
    />
  );
  
  // Botones de cada ejercicio
  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseItem}>
      <TouchableOpacity style={styles.button} onPress={() => handleSelectExercise(item.id)}>
        <Text style={styles.exerciseText}>{item.name}</Text>
        
      </TouchableOpacity>
    </View>
  );

  return (
    


    // Estilos de la vista principal
    <View style={globalstyles.background}>
      <TabView
        swipeEnabled={false}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        indicatorStyle={{ backgroundColor: Color.secondary }}
        style={{ backgroundColor: Color.primary }}
      />
      
       
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.option} onPress={() => handleSelectMuscle(item.label)}>
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>


      {exercises.length > 0 && (
        
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={renderExerciseItem}
          contentContainerStyle={styles.exerciseList}
        />
        
      )}

      </View>

      {exerciseDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={detailModalVisible}
          onRequestClose={toggleDetailModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.exercisePText}>Nombre: {exerciseDetails.name}</Text>
              <Text style={styles.exercisePText}>Equipo: {exerciseDetails.equipment}</Text>
              <Text style={styles.exercisePText}>Target: {exerciseDetails.target}</Text>
              <Image
              source={{ uri: exerciseDetails.gifUrl }}
              style={{ width: 200, height: 200 }}
              />
              <Button title="Close" onPress={toggleDetailModal} />
  
              <Button title="Agregar a rutina" onPress={toggleDetailModal} />
            </View>
          </View>
        </Modal>
      )}
      


      <StatusBar hidden={true} />
    </View>
  );
}