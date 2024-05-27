import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons

export default function Settings() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
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
      <ScrollView style={globalstyles.contenido}>
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
                {/*Cambiar aquí si se quiere agregar otra cosa aparte de sólo texto*/}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
