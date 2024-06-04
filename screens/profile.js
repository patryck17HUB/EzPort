import React, { useContext } from "react";
import { View, Image, Text, ScrollView,ImageBackground } from "react-native";
import { styles } from "../styles/profilestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { UserContext } from '../context/UserContext';

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <View style={globalstyles.background}>
    <ImageBackground source={require('../assets/image.png')} resizeMode="cover" style={styles.backgroundImage}>
    <ScrollView style={[globalstyles.contenido]}>
      {user ? (
        <View style={styles.profileContainer}>
            <View style={styles.overlayContainer}>
              <Image source={{ uri: user.photo }} style={styles.profileImage} />
              <Text style={styles.profileName}>{user.name}</Text>
              <Text style={styles.profileEmail}>{user.email}</Text>
            </View>
        </View>
      ) : (
        <Text style={styles.noProfileText}>No user information available</Text>
      )}
    </ScrollView>
    </ImageBackground>

  </View>
  );
}
