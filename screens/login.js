import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { styles } from "../styles/loginstyles";
import SvgComponent  from './SVGComponet';
import { UserContext } from '../context/UserContext';

export default function Login({ navigation }) {
  const [error, setError] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '467750875455-d7ou19di6ckc6v1eo22ufvpjl8bo6blb.apps.googleusercontent.com',
    });

    const checkIfLoggedIn = async () => {
      try {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
          const userInfo = await GoogleSignin.signInSilently();
          setUser(userInfo.user);
          navigation.navigate('MainTabs');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkIfLoggedIn();
  }, [navigation, setUser]);

  const signin = async () => {
    if (isSigningIn) {
      return;
    }

    setIsSigningIn(true);
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUser(user.user);
      setError(null);
      navigation.navigate('MainTabs');
    } catch (e) {
      setError(e);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <SvgComponent />
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTiltle}>Sign in to your account</Text>
      <View style={styles.containerButton}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={signin}
          style={styles.googleButton}
        />
        {error && <Text style={styles.errorText}>{JSON.stringify(error)}</Text>}
      </View>
    </View>
  );
}
