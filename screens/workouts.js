import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getMuscleList, getMuscle } from "../api/user_api";
import { styles } from "../styles/workoutsstyles";
import { globalstyles } from "../styles/GlobalStyles";
import { database } from '../firebaseConfig';

export default function Workouts({ navigation }) {
  const [exercisePlans, setExercisePlans] = useState([]);

  useEffect(() => {
    const userId = "userId1"; // Reemplaza esto con el ID del usuario actualmente autenticado
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
          <Text style={styles.createButtonText}>Crear Plan</Text>
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

/* BUSCADOR DE EJERCICIOS
const [muscle, setMuscle] = useState("");

const handleGetMuscle = async () => {
  try {
    const response = await getMuscle(muscle); // Llamada a la función getMuscle con el nombre del músculo
    console.log("Muscle details:", response.data);
    // Handle the muscle data as needed
  } catch (error) {
    console.error("Error fetching muscle details:", error);
    // Handle errors
  }
};

<TextInput
  style={styles.input}
  placeholder="Enter muscle name"
  value={muscle}
  onChangeText={(text) => setMuscle(text)}
  placeholderTextColor={"#FFFFFF"}
/>

<TouchableOpacity style={styles.button} onPress={handleGetMuscle}>
  <Text style={styles.buttonText}>Search</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={getMuscleList}>
  <Text style={styles.buttonText}>Get Muscle List</Text>
</TouchableOpacity>
*/

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
      }
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

/* DATABASE

const writeUserData = (userId, name, email) => {
  database.ref('asi/' + userId).set({
    username: name,
    email: email,
  });
};
const readUserData = (userId) => {
  return database.ref('users/' + userId).once('value').then(snapshot => {
    const data = snapshot.val();
    return data;
  });
};
useEffect(() => {
  readUserData('1').then(data => {
    setUser(data);
  });
}, []);

// Borrar todos los datos en la base de datos
const rootRef = database.ref('/');
const deleteAllData = () => {
  rootRef.remove()
    .then(() => {
      console.log("Todos los datos han sido eliminados.");
    })
    .catch((error) => {
      console.error("Error al eliminar los datos:", error);
    });
};

const [user, setUser] = useState(null);

<Button
title="Write User Data"
onPress={() => writeUserData('2', 'John Jen', 'john@example.com')}
/>

<Button
title="DELETE ALL DATA"
onPress={deleteAllData}
/>

{user ? (
<Text>{`Name: ${user.username}, Email: ${user.email}`}</Text>
) : (
<Text>Loading...</Text>
)}
*/