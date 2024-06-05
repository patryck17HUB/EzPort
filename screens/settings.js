import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image,ImageBackground  } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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
    { title: "Sobre EzPort", content: "Está Registra tus entrenamientos y monitorea tu progreso a lo largo del tiempo. EZport te permite llevar un registro de tus repeticiones, series y pesos utilizados, ayudándote a ver tu evolución y a ajustar tus rutinas según tus avances." },
    { title: "Contacto", content: "pablojosuecamorlinga@gmail.com  +52 419 105 0392" },
    { title: "Ayuda", content: "Si necesitas asistencia, por favor contacta con nuestro equipo de soporte a través del correo electrónico proporcionado en la sección de Contacto." },
    { title: "Terms", content: "Por favor, revisa nuestros términos y condiciones para entender las políticas y el funcionamiento de EZport." },
    { title: "Privacidad", content: "Nos tomamos muy en serio la privacidad de nuestros usuarios. Consulta nuestra política de privacidad para más detalle" },
    { title: "Cookies", content: "Utilizamos cookies para mejorar tu experiencia en nuestra app. Para más información sobre el uso de cookies, por favor revisa nuestra política de cookies." },
    { title: "Legal", content: "Toda la información legal relacionada con el uso de EZport se encuentra detallada en nuestra sección de términos y condiciones." },
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
