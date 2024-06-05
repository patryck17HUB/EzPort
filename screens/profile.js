import React, { useContext, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { styles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  console.log(user)
  console.log(user.id)

  const logout = async () => {
    if (isLoggingOut) return; // Prevent multiple logouts
    setIsLoggingOut(true);

    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      navigation.navigate('Login');

    } catch (error) {
      console.error("Error during logout:", error);
      Alert.alert("Error during logout:", error.message);
    } finally {
      setIsLoggingOut(false);
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
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
