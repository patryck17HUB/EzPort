import React, { useContext } from "react";
import { View, Image, Text, ScrollView,ImageBackground } from "react-native";
import { styles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

export default function Profile() {
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
        </View>
      ) : (
        <Text style={styles.noProfileText}>No user information available</Text>
      )}
    </ScrollView>
  </View>
  );
}
