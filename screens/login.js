import React, {useState} from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/loginstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { login } from "../api/user_api";
import { register } from "../api/user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if(password && username){
            console.log("Username: ", username);
            console.log("Password: ", password);
            login({
                password : password,
                username : username, 
                email:email
            }).then((result) => {
                if(result.status == 200){
                    AsyncStorage.setItem("AccessToken", result.token);
                    console.log(result);
                }
            })
            .catch(err => {
                console.error(err);
            });
        }else{
            alert("Por favor, llene todos los campos");
        }
    }

  return (
    <View style={globalstyles.background}>

      <ScrollView style={[globalstyles.contenido]}>

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.TextInput} 
            placeholder="Nombre de Usuario"
            placeholderTextColor={"#FFFFFF"}
            maxLength={30}
            onChangeText={setUsername}
            />
            <TextInput 
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor={"#FFFFFF"}
            maxLength={30}
            onChangeText={setEmail}
            />
            <TextInput 
            style={styles.TextInput}
            placeholder="Contraseña"
            placeholderTextColor={"#FFFFFF"}
            maxLength={20}
            onChangeText={setPassword}
            //secureTextEntry={true}
            />
        </View> 

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttontext}>Enviar</Text>
        </TouchableOpacity>

       </ScrollView> 

    </View>
  );
}