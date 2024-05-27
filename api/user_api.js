import ApiManager from './apimanager';

export const getMuscleList  = async ()  => {
  try {
    const response = await ApiManager('/bodyPartList', {
        method: 'GET',
    });
    console.log("MUSCLE LIST");
    console.log(response.data)
    return response;
  } catch (error) {
    return error;
  }
}

export const getMuscle  = async muscle  => {
try {
    const response = await ApiManager('/bodyPart/'+ muscle, {
        method: 'GET',
        params: {limit: '16'},
    });
    console.log(response.data)
    return response;
} catch (error) {
    return error;
}
}
 
export const getExerciseByID   = async m_id  => {
  try {
      const response = await ApiManager('/exercise/'+ m_id, {
          method: 'GET',
          params: {limit: '10'},
      });
      console.log(response.data)
      return response;
  } catch (error) {
      return error;
  }

  }
