import * as React from 'react';
import { useState } from 'react';
import { View, useWindowDimensions, Text, Button, Modal, FlatList, TouchableOpacity, Image, ScrollView  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Color } from "../styles/GlobalStyles";
import { StatusBar } from 'expo-status-bar';
import { getMuscle, getExerciseByID } from '../api/user_api';
import { LinearGradient } from 'expo-linear-gradient';

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
    const response = await getMuscle(muscle);
    setExercises((prevExercises) => ({
      ...prevExercises,
      [muscle]: response.data,
    }));
  } catch (error) {
    console.error("Error fetching muscle details:", error);
  }
};

const handleGetExerciseDetails = async (id, setExerciseDetails, setDetailModalVisible) => {
  try {
    const response = await getExerciseByID(id);
    setExerciseDetails(response.data);
    setDetailModalVisible(true);
  } catch (error) {
    console.error("Error fetching exercise details:", error);
  }
};

export default function Explore({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState({});
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

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

  const toggleSection = (section) => {
    setExpandedSections((prevExpandedSections) => ({
      ...prevExpandedSections,
      [section]: !prevExpandedSections[section],
    }));
    if (!exercises[section]) {
      handleGetMuscle(section, setExercises);
    }
  };

  const handleSelectExercise = (id) => {
    handleGetExerciseDetails(id, setExerciseDetails, setDetailModalVisible);
  };

  const toggleDetailModal = () => {
    setDetailModalVisible(!detailModalVisible);
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Ejercicios', title: 'Ejercicios' },
    { key: 'Rutinas', title: 'Rutinas' },
  ]);

  const dynamicTabBarStyle = (index) => ({
    margin: 0,
    backgroundColor: index === 0 ? Color.secondary : Color.secondary,
    top: 0,
    borderRadius: 0,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: 'white',
        width: '46%',
        left: '2.5%',
        right: '2.5%',
      }}
      style={dynamicTabBarStyle(index)}
      labelStyle={{ color: 'white', fontSize: 16 }}
    />
  );

  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseItem}>
      <TouchableOpacity style={styles.button} onPress={() => handleSelectExercise(item.id)}>
        <Text style={styles.exerciseText}>{item.name}</Text>
            <Ionicons
      name="add"
      size={24}
      color="#ffffff"
      style={styles.icon}
    /> 
        
      </TouchableOpacity>
    </View>
  );
  
  const renderOptionItem = ({ item }) => (
    

    <View key={item.label}>
      <ScrollView></ScrollView>
      <TouchableOpacity style={styles.option} onPress={() => toggleSection(item.label)}>
        <Text style={styles.optionText}>{item.label}</Text>
        <Ionicons
          name={expandedSections[item.label] ? "chevron-down" : "chevron-forward"}
          size={24}
          color="#ffffff"
          style={styles.icon}
        />
      </TouchableOpacity>
      {expandedSections[item.label] && exercises[item.label] && (
        
        <View style={styles.content}>
          <FlatList
            data={exercises[item.label]}
            keyExtractor={(exerciseItem) => exerciseItem.id}
            renderItem={renderExerciseItem}
            contentContainerStyle={styles.contentText}
          />
        </View>
      )}
    </View>
    

  );

  return (
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
      
        <FlatList
          data={options}
          keyExtractor={(item) => item.label}
          renderItem={renderOptionItem}
        />
      
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