import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/loginstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { login } from "../api/user_api";
import { register } from "../api/user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from "react";

export default function Login({ navigation }) {

    const [error, setError] = useState();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '467750875455-d7ou19di6ckc6v1eo22ufvpjl8bo6blb.apps.googleusercontent.com',
        });
      }, []);
    
      const signin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const user = await GoogleSignin.signIn();
          setUserInfo(user);
          setError();
        } catch (e) {
          setError(e);
        }
      }
      const logout = () => {
        setUserInfo();
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
      }


  return (
    <View style={globalstyles.background}>

        <View style={styles.container}>
            <Text style={{color: "#FFF"}}> {JSON.stringify(error)} </Text>
            {userInfo && <Text style={{color: "#FFF"}}>{JSON.stringify(userInfo.user)} </Text>}

            <Button title="Logout" onPress={logout} style={styles.signout} />

            <GoogleSigninButton
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Light}
                onPress={signin}
            />
        </View>

    </View>
  );
}