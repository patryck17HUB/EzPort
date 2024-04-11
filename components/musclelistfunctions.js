import axios from "axios";

export async function getMuscleList() {
  try {
    const response = await axios.get('https://wger.de/api/v2/muscle/');
    const muscleGroups = response.data.results;
    muscleGroups.forEach(group => {
      console.log("id: "+group.id+" "+group.name);
    });
  } catch (error) {
    console.error("Error al entrar a la funcion axios getMuscleList: ", error);
  }
}
