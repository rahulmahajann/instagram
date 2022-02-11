import axios from 'axios';

const URL = 'http://localhost:5000';

export const signup = async (userData) => {
    try{
        const awazAii = await axios.post(`${URL}/signUp`, userData);
        return {message: awazAii.data.message}
    }catch (err) {
        console.log(err);;
    }
}

