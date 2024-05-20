import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/Logos.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.loadingBox}></View>
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingBox: {
    width: 100, // Ancho del cuadro blanco
    height: 30, // Alto del cuadro blanco
    backgroundColor: '#ffff', // Color blanco
    position: 'absolute', // Posicionamiento absoluto
    zIndex: 1, // Asegura que el cuadro blanco esté sobre la animación
    top: 430, // Posición desde la parte superior
    left: 140, // Posición desde la parte izquierda
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default LoadingScreen;
