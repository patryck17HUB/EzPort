import React, { useEffect, useState } from "react";
import { Color } from "./styles/GlobalStyles";
import Workouts from "./screens/workouts";
import {Text} from "react-native";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function WorkoutsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Workouts2" 
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
          title: 'Create Workout',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="EditarPlan" 
        component={EditarPlan} 
        options={{ 
          headerShown: true, 
          title: 'Edit Workout',
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
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile2" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="History" 
        component={History} 
        options={{ 
          headerShown: true, 
          title: 'Workout History',
          headerStyle: { backgroundColor: Color.primary },
          headerTintColor: '#fff' 
        }} 
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Explore') {
            iconName = 'search-web';
          } else if (route.name === 'Workouts') {
            iconName = 'arm-flex';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={focused ? '#000000' : color}
              style={{
                backgroundColor: focused ? '#fff' : 'transparent',
                borderRadius: focused ? size / 2 : 0,
                padding: focused ? 5 : 0,
              }}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Text style={{ color: '#FFFFFF', fontSize: 12 ,marginTop: -8}}>
              {route.name}
            </Text>
          ) : null;
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#f0edf6',
        tabBarStyle: { backgroundColor: Color.primary, height: 68, borderTopWidth: 1, borderTopColor: '#FFFFFF' },
        headerShown: false
      })}
    >
      <Tab.Screen name="Explore" component={Explore} options={{ title: 'Explorar' }} />
      <Tab.Screen name="Workouts" component={WorkoutsStack} options={{ title: 'Plan' }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ title: 'Perfil' }} />
      <Tab.Screen name="Settings" component={Settings} options={{ title: 'Config' }} />
    </Tab.Navigator>
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
