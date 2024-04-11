import ApiManager from './apimanager';

export const login = async data => {
    try {
        console.log("ENTRO AL LOGIN")
        console.log(data)
        const result = await ApiManager('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        });
        console.log("RESULT")
        console.log(result)
        return result;
    } catch (error) {
        return error.response.data;
    }
};

export const register = async data => {
    try {
        const result = await ApiManager('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        });
        return resultdata;
    } catch (error) {
        return error.response.data;
    }
};