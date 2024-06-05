import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image,ImageBackground  } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; // Importa la función useNavigation
import miImagen from '../assets/Logoblanco.png'; 

import { UserContext } from '../context/UserContext';

export default function Settings() {
  const navigation = useNavigation(); // Obtén el objeto de navegación
  const [expandedSections, setExpandedSections] = useState({});
  const [error, setError] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { title: "EzPort", content: "It records your workouts and monitors your progress over time. EZport allows you to keep track of your repetitions, sets and weights used, helping you see your progress and adjust your routines accordingly. your progress." },
    { title: "Contact", content: "pablojosuecamorlinga@gmail.com  +52 419 105 0392" },
    { title: "Help", content: "If you need assistance, please contact our support team via the email provided in the Contact section." },
    { title: "Terms", content: "Please review our terms and conditions to understand the policies and operation of EZport." },
    { title: "Privacity", content: "We take the privacy of our users very seriously. Consult our privacy policy for more details" },
    { title: "Cookies", content: "We use cookies to improve your experience in our app. For more information about the use of cookies, please review our cookie policy." },
    { title: "Legal", content: "All legal information related to the use of EZport is detailed in our terms and conditions section." },
  ];

  return (
    <View style={globalstyles.background}>
      <ScrollView style={styles.scrollContainer}>
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
        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      </ScrollView>
    </View>
  );
}
