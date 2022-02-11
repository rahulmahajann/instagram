import React, { useState } from 'react';
import { signup } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const initialValue = {
    username: '',
    emailId: '',
    password: '',
    name: '',
    phoneNumber: ''
}

function Signup(){

    const [userData, setUserData] = useState(initialValue);

    const navigate = useNavigate();

    const saveData = async (e) => {
        e.preventDefault();
        console.log('click krdo!');
        // console.log(userData);
        const apiResponse = await signup(userData);
        // console.log(apiResponse);
        if(apiResponse.message === 'signup successfull'){
            navigate('/');
        }else{
            alert(apiResponse.message);
        }
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    // console.log(userData);

    return(
        <>
        <form>
            <input type="text" name="username" placeholder="username" onChange={ (e) => handleChange(e) } required />
            <input type='email' name="emailId" placeholder="email id" onChange={ (e) => handleChange(e) } required />
            <input type = 'password' name="password" placeholder="password" onChange={ (e) => handleChange(e) } required />
            <input type = 'text' name="name" placeholder="name" onChange={ (e) => handleChange(e) } required />
            <input type = 'text' name="phoneNumber" placeholder="phone number" onChange={ (e) => handleChange(e) } required />
            <button type = 'submit' onClick={ (e) => saveData(e) } >Sign Up</button>
        </form>
        <Link to = {'/'}>
            <p>have account? login!</p>
        </Link>
        </>
    )
}

export default Signup;