import React, { useContext } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

export default function Profile({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={globalstyles.background}>
      <ScrollView>
        {user ? (
          <View style={styles.profileContainer}>
            <ImageBackground source={require('../assets/image.png')} style={styles.backgroundImage}>
              <View style={styles.overlayContainer}>
                <Image source={{ uri: user.photo }} style={styles.profileImage} />
                <Text style={styles.profileName}>{user.name}</Text>
                <Text style={styles.profileEmail}>{user.email}</Text>
              </View>
            </ImageBackground>
            <TouchableOpacity
              style={styles.historyButton}
              onPress={() => navigation.navigate('History')}
            >
              <Text style={styles.historyButtonText}>Ver Historial</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.noProfileText}>No user information available</Text>
        )}
      </ScrollView>
    </View>
  );
}
