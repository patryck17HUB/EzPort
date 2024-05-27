import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Alert } from "react-native";
import { GoogleSignin, GoogleSigninButton  } from '@react-native-google-signin/google-signin';
import { styles } from "../styles/loginstyles"; // Importando los estilos
import SvgComponent from './SVGComponet';

export default function Login({ navigation }) {
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isSigningIn,setIsSigningIn] =useState (null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '467750875455-d7ou19di6ckc6v1eo22ufvpjl8bo6blb.apps.googleusercontent.com',
        });

        const checkIfLoggedIn = async ()=>{
          try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            if (isSignedIn) {
                const userInfo = await GoogleSignin.signInSilently();
                setUserInfo(userInfo);
                navigation.navigate('Explore'); 
            }else {
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error(error);
        }
    };
        checkIfLoggedIn();


    }, [navigation]);

   

    const signin = async () => {
        if (isSigningIn) {
            return;
        }

        setIsSigningIn(true);
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo(user);
            setError(null);
            navigation.navigate('Explore');
        } catch (e) {
            setError(e);
        } finally {
            setIsSigningIn(false);
        }
    };

    const logout = async () => {
      try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setUserInfo(null);
      } catch (error) {
          setError(error);
      }
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

