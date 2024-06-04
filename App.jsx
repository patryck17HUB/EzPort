import React, { useEffect, useState } from "react";
import { Color } from "./styles/GlobalStyles";
import { BottomNavigation } from 'react-native-paper';
import Workouts from "./screens/workouts";
import PlanDetails from "./screens/planDetails";
import CreatePlan from "./screens/createPlan";
import Explore from "./screens/explore";
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Login from "./screens/login";
import LoadingScreen from "./LoadingScreen";
import EditarPlan from "./screens/EditarPlan";
import Training from "./screens/Training";
import AgregarEjercicio from "./screens/AgregarEjercicio";
import History from "./screens/History";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();

function WorkoutsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Workouts" 
        component={Workouts} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="PlanDetails" 
        component={PlanDetails} 
        options={{ 
          headerShown: true, 
          title: 'Plan Details',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff' 
        }} 
      />
      <Stack.Screen 
        name="CreatePlan" 
        component={CreatePlan} 
        options={{ 
          headerShown: true, 
          title: 'Crear Plan',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="EditarPlan" 
        component={EditarPlan} 
        options={{ 
          headerShown: true, 
          title: 'Editar Plan',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="Training" 
        component={Training} 
        options={{ 
          headerShown: true, 
          title: 'Training',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="AgregarEjercicio" 
        component={AgregarEjercicio} 
        options={{ 
          headerShown: true, 
          title: 'Add Exercise',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff'
        }} 
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
      <Stack2.Screen 
        name="History" 
        component={History} 
        options={{ 
          headerShown: true, 
          title: 'Historial',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff' 
        }} 
      />
    </Stack2.Navigator>
  );
}

function MainTabs() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'Explore', title: 'Explorar', component: Explore, icon: 'search-web', tabbarColor: '#FF1C1C' },
    { key: 'Workouts', title: 'Plan', component: WorkoutsStack, icon: 'arm-flex', tabbarColor: '#72FF1C' },
    { key: 'Profile', title: 'Perfil', component: ProfileStack, icon: 'account', tabbarColor: '#1CFFE3' },
    { key: 'Settings', title: 'Config', component: Settings, icon: 'cog', tabbarColor: '#D91CFF' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Explore: Explore,
    Workouts: WorkoutsStack,
    Profile: ProfileStack,
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
        backgroundColor: Color.primary,
        position: 'absolute',
        overflow: 'hidden',
        height: 68,
        borderTopWidth: 1,
        borderTopColor: '#FFFFFF',
      }}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
}
