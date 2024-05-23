import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function Settings({ navigation }) {
  return (
    <View style={globalstyles.background}>
      <ScrollView style={globalstyles.contenido}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('About')}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.optionText}>Contacto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Help')}>
          <Text style={styles.optionText}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.optionText}>Términos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.optionText}>Privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Cookies')}>
          <Text style={styles.optionText}>Cookies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Legal')}>
          <Text style={styles.optionText}>Legal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
