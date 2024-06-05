import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { database } from '../firebaseConfig'; // Importa tu configuración de Firebase aquí
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from "../styles/GlobalStyles";

import { UserContext } from '../context/UserContext';

export default function Workouts({ navigation }) {
  const [exercisePlans, setExercisePlans] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userId = user.id;
    const plansRef = database.ref(`users/${userId}/exercisePlans`);

    // Suscripción a cambios en los planes de ejercicios
    plansRef.on('value', snapshot => {
      const plans = snapshot.val();
      if (plans) {
        const planList = Object.keys(plans).map(key => ({
          id: key,
          ...plans[key],
          exercises: plans[key].exercises ? Object.keys(plans[key].exercises) : []
        }));
        setExercisePlans(planList);
      }
    });

    // Limpiar la suscripción cuando el componente se desmonta
    return () => plansRef.off();
  }, [user]);

  return (
    <View style={globalstyles.background}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workouts</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreatePlan')}
        >
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contenido}>
        <View style={styles.container}>
          {exercisePlans.map(plan => (
            <LinearGradient
              key={plan.id}
              colors={['#7236AB', Color.purple1]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('PlanDetails', { planId: plan.id })}
              >
                <View style={styles.planRow}>
                  <Text style={styles.planTitle}>{plan.title}</Text>
                  <Text style={styles.planCount}>Exercises: {plan.exercises.length}</Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
