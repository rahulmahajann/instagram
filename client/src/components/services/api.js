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

export const signin = async(userData) => {
    try{
        const awazAii = await axios.post(`${URL}/signIn`, userData);
        // console.log(awazAii);
        return {information: awazAii.data};
    }catch(err){
        console.log(err);
    }
}

export const usrByName = async(userData) => {
    try{
        const awazAii = await axios.post(`${URL}/usrbyname`, userData);
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const resetpassword = async(userData, password) => {
    try{    
        const awazAii = await axios.put(`${URL}/resetpassword`, {userData, password});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}