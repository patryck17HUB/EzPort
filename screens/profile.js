import React, { useContext } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde @react-navigation/native

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const logout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      if (user !== null && user.id) { // Verifica si 'user' no es null y si tiene una propiedad 'id'
        setUser(null);
      }
      navigation.navigate('Login'); 
    } catch (error) {
      console.error("Error during logout:", error);
      setError(error);
    }
  };
  
  return (
    <View style={globalstyles.background}>
      <ImageBackground source={require('../assets/image.png')} resizeMode="cover" style={styles.backgroundImage}>
        <ScrollView style={[globalstyles.contenido]}>
          {user ? (
            <View style={styles.profileContainer}>
              <View style={styles.overlayContainer}>
                <Image source={{ uri: user.photo }} style={styles.profileImage} />
                <View style={styles.userInfoSection}>
                  <Text style={styles.profileName}>{user.name}</Text>
                  <Text style={styles.profileEmail}>{user.email}</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.noProfileText}>No user information available</Text>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.historyButton}
              onPress={() => navigation.navigate('History')}
            >
              <Text style={styles.historyButtonText}>View History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
