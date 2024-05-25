//autenticacion
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, register } from "../api/user_api"; // Asegúrate de tener estos módulos implementados y exportados
import { styles } from "../styles/loginstyles"; // Importando los estilos
import SvgComponent from './SVGComponet';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ setIsAuthenticated }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const [ response] = Google.useIdTokenAuthRequest({
    clientId: "467750875455-d7ou19di6ckc6v1eo22ufvpjl8bo6blb.apps.googleusercontent.com",
    androidClientId: "467750875455-5e0n1euhv4ntlvhvnjfnge6d79susjlf.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const userInfo = await response.json();
    setUser(userInfo);

    // Redirigir a la pestaña de "Explore" después de la autenticación exitosa
    setIsAuthenticated(true);
  }
   
    return (
      <View style={styles.container}> 
      <SvgComponent/>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTiltle}>Sign in to your account</Text>
      <View style={styles.containerButton}>
      <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={signin}
          style={styles.googleButton}
          />
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{JSON.stringify(error)}</Text>}
          {userInfo && <Text style={styles.userInfo}>{JSON.stringify(userInfo.user)}</Text>}
          </View>
         </View>
    );
}

export default Login;