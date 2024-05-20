import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, register } from "../api/user_api"; // Asegúrate de tener estos módulos implementados y exportados
import { styles } from "../styles/loginstyles"; // Importando los estilos
import Svg, { Path, LinearGradient, Defs, Stop } from 'react-native-svg';


const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1399}
    height={1182}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="m1399 1042.33-58.29 27.16c-58.29 23.76-174.88 74.69-291.46 98.46-116.583 23.77-233.167 23.77-349.75-50.93-116.583-74.69-233.167-224.082-349.75-322.543-116.583-98.461-233.167-149.389-291.458-173.155L0 597.555V0h1399v1042.33Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-56.748}
        x2={1341.68}
        y1={459.944}
        y2={465.317}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5F10DF" />
        <Stop offset={0.998} stopColor="#330979" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const Login = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            setError(null);
        } catch (e) {
            setError(e);
        }
    }

    const logout = () => {
        setUserInfo(null);
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
    }

    return (
       <View style={styles.container}> 
        <SvgComponent />
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTiltle}>Sign in to your account</Text>
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
    );
}

export default Login;