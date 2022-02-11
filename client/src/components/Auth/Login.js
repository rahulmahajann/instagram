import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../services/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    username: '',
    password: ''
}

function Login(){

    const [userData, setUserData] = useState(initialValue);
    const navigate = useNavigate();

    const validateData = async (e) => {
        e.preventDefault();
        // console.log('click hua!');
        // console.log(userData);
        const apiResponse = await signin(userData);
        // console.log(apiResponse);
        // console.log(apiResponse.information.name);
        if (apiResponse.information.message === 'successfully logged in!'){
            localStorage.setItem("token", apiResponse.information.token);
            localStorage.setItem("name", apiResponse.information.nameOfUser);
            navigate('/home')
        }else{
            alert(apiResponse.information.message);
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
                <input type="text" name="username" onChange = { (e) => handleChange(e) } placeholder="username" required />
                <input type = 'password' name="password" onChange = { (e) => handleChange(e) } placeholder="password" required />
                <button type = 'submit' onClick = { (e) => validateData(e) }>Login</button>
            </form>
            <Link to = {'/finduserforreset'}>
                <p>forgot password? Reset here!</p>
            </Link>
            <Link to = {'/signup'}>
                <p>don't have account? SingUp</p>
            </Link>
        </>
    )
}

export default Login;