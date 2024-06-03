import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image,ImageBackground  } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Ionicons } from '@expo/vector-icons';
import RNRestart from 'react-native-restart';
import { useNavigation } from "@react-navigation/native"; // Importa la función useNavigation
import miImagen from '../assets/Logoblanco.png'; 

import { UserContext } from '../context/UserContext';

export default function Settings() {
  const navigation = useNavigation(); // Obtén el objeto de navegación
  const [expandedSections, setExpandedSections] = useState({});
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const logout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      RNRestart.restart();
    } catch (error) {
      console.error("Error during logout:", error);
      setError(error);
    }
  };

  const navigateToRoot = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }]
    });
  };

  const sections = [
    { title: "Sobre EzPort", content: "Está vergas" },
    { title: "Contacto", content: "Llámame 🥴" },
    { title: "Ayuda", content: "No sé" },
    { title: "Terms", content: "Terminamos 😔" },
    { title: "Privacidad", content: "No hay jajsjs" },
    { title: "Cookies", content: "Qué vergas ponemos aquí 🤔" },
    { title: "Legal", content: "Legal we" },
  ];

  return (
    <View style={globalstyles.background}>
<<<<<<< HEAD
      
      <ScrollView style={globalstyles.contenido}>
=======
      <ScrollView style={styles.scrollContainer}>
>>>>>>> 16a33daa4b9421c9d3a1cbf6d8ee96a0aa8c7fa2
      <View style={styles.logocontainer}>
        
        <Image source={miImagen} style={styles.logo} />
      </View>
        {sections.map((section) => (
          <View key={section.title}>
            <TouchableOpacity style={styles.option} onPress={() => toggleSection(section.title)}>
              <Text style={styles.optionText}>{section.title}</Text>
              <Ionicons
                name={expandedSections[section.title] ? "chevron-down" : "chevron-forward"}
                size={24}
                color="#fff"
                style={styles.icon}
              />
            </TouchableOpacity>
            {expandedSections[section.title] && (
              <View style={styles.content}>
                <Text style={styles.contentText}>{section.content}</Text>
              </View>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
<<<<<<< HEAD
=======
        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
>>>>>>> 16a33daa4b9421c9d3a1cbf6d8ee96a0aa8c7fa2
      </ScrollView>
    </View>
  );
}
