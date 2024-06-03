import React, { useState, useEffect , useContext} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getMuscleList, getMuscle } from "../api/user_api";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { database } from '../firebaseConfig';

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
            ...plans[key]
          }));
          setExercisePlans(planList);
        }
      })
      .catch(error => {
        console.error("Error fetching exercise plans:", error);
      });
  }, []);

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
      <ScrollView style={globalstyles.contenido}>
        <View style={styles.container}>
          {exercisePlans.map(plan => (
            <TouchableOpacity
              key={plan.id}
              style={styles.planButton}
              onPress={() => navigation.navigate('PlanDetails', { planId: plan.id })}
            >
              <Text style={styles.planTitle}>{plan.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* JSON EXAMPLE
{
  "users": {
    "userId1": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "profilePicture": "https://example.com/john.jpg",
      "exercisePlans": {
        "planId1": {
          "title": "Beginner Plan",
          "exercises": {
            "exerciseId1": {
              "name": "Push-ups",
            },
            "exerciseId2": {
              "name": "Sit-ups",
            }
          }
        },
        "planId2": {
          "title": "Advanced Plan",
          "exercises": {
            "exerciseId1": {
              "name": "Pull-ups",
            },
            "exerciseId2": {
              "name": "Squats",
            }
          }
        }
      },
      "planCounter": 3 // Nuevo nodo para contar planes
    },
    "userId2": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "profilePicture": "https://example.com/jane.jpg",
      "exercisePlans": {
        "planId1": {
          "title": "Intermediate Plan",
          "exercises": {
            "exerciseId1": {
              "name": "Lunges",
            },
            "exerciseId2": {
              "name": "Plank",
            }
          }
        }
      }
    }
  }
}

*/