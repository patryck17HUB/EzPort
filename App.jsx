import  React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Color, FontSize, FontFamily } from "./styles/GlobalStyles";
import { BottomNavigation, Text , TouchableRipple} from 'react-native-paper';

import Workouts from "./screens/workouts";
import Explore from "./screens/explore";
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Login from "./screens/login";

// Navegar entre paginas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from "react-native-safe-area-context";

//const Tab = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

function MainTabs() {

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'Explore', title: 'Explorar', component: Explore, icon: 'search-web', tabbarColor: '#FF1C1C' },
    { key: 'Workouts', title: 'Plan', component: Workouts, icon: 'arm-flex', tabbarColor: '#72FF1C' },
    { key: 'Profile', title: 'Perfil', component: Profile, icon: 'account', tabbarColor: '#1CFFE3' },
    { key: 'Settings', title: 'Config', component: Settings, icon: 'cog', tabbarColor: '#D91CFF' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Explore: Explore,
    Workouts: Workouts,
    Profile: Profile,
    Settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#f0edf6"
      renderIcon={({ route, focused, color }) => {
        const iconName = route.icon;
        const iconSize = focused ? 24 : 30;
        color = focused ? '#000000' : color;
        return <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />;
      }}
      barStyle={{ 
        backgroundColor: Color.secondary ,
        //height: 70,
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        borderRadius: 16,
        overflow: 'hidden',
        height: 73,
      }}
      style={{
      }}
    />
  );
}

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }
    , 2000);
  }); 

  const handleGetToken = async () => {
    const token = "123456"
    //const token = await AsyncStorage.getItem("AccessToken");
    console.log(token);
    if (token) {
      setUserLoggedIn(true);
    }
  }

  console.log(userLoggedIn);

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      {userLoggedIn ? (
        <MainTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const pageoptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

/* COSAS POR HACER
Paginas--
  Login
  Register
  Explorar
    Ejercicios
    Plantillas publicas (Rutinas)
  Entrenamientos
    Rutinas
    Programas
  Profile
    Registros
    Peso corporal
  Settings 
  -- DIVIDER --
    About
    Contact
    Help
    Terms
    Privacy
    Cookies
    Legal
*/