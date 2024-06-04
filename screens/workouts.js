import React, { useState, useEffect , useContext} from "react";
import { View, Text, TouchableOpacity, ScrollView,Image, ImageBackground } from "react-native";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { database } from '../firebaseConfig'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Color} from "../styles/GlobalStyles";

import { UserContext } from '../context/UserContext';

export default function Workouts({ navigation }) {
  const [exercisePlans, setExercisePlans] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userId = user.id; // Reemplaza esto con el ID del usuario actualmente autenticado
    const plansRef = database.ref(`users/${userId}/exercisePlans`);

    plansRef.once('value')
      .then(snapshot => {
        const plans = snapshot.val();
        if (plans) {
          const planList = Object.keys(plans).map(key => ({
            id: key,
            ...plans[key],
            exercises: plans[key].exercises ? Object.keys(plans[key].exercises) : []
          }));
          setExercisePlans(planList);
        }
      })
      .catch(error => {
        console.error("Error fetching exercise plans:", error);
      });
  }, [user]);

  return (
    <View style={globalstyles.background}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Entrenamientos</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreatePlan')}
        >
          <Text style={styles.createButtonText}>Crear Rutina</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contenido}>
        <View style={styles.container}>
          {exercisePlans.map(plan => (
            <LinearGradient
            colors={['#7236AB', Color.purple1]}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
            <TouchableOpacity
              key={plan.id}
              onPress={() => navigation.navigate('PlanDetails', { planId: plan.id })}
            >

              <View style={styles.planRow}>
                <Text style={styles.planTitle}>{plan.title}</Text>
                <Text style={styles.planCount}>Ejercicios: {plan.exercises.length}</Text>
              </View>
              
            </TouchableOpacity>
            </LinearGradient>
          ))}
          
        </View>
      </ScrollView>
    </View>
  );
}
