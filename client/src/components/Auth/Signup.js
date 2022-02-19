import React, { useState } from 'react';
import { signup } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
    username: '',
    emailId: '',
    password: '',
    name: '',
    phoneNumber: ''
}

toast.configure();

function Signup(){

    const [userData, setUserData] = useState(initialValue);
    const [localImage, setLocalImage] = useState('');

    const navigate = useNavigate();

    const saveData = async (e) => {
        e.preventDefault();
        // console.log('click krdo!');
        // console.log(userData);

        const imageData = new FormData();
        imageData.append('file', localImage);
        imageData.append('upload_preset', 'instagrampost');
        imageData.append('cloud_name', 'rahulmahajan');
        console.log(imageData);
        const keseHo = await fetch('https://api.cloudinary.com/v1_1/rahulmahajan/image/upload', {
            method: 'post',
            body: imageData
        })
        const res = await keseHo.json();

        console.log(res.url);

        const apiResponse = await signup(userData, res.url);
        // console.log(apiResponse);
        if(apiResponse.message === 'signup successfull'){
            toast.success('signup successfull');
            navigate('/');
        }else{
            toast.error('duplicate data please try again');
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
        <input type = 'file' onChange = {(e) => setLocalImage(e.target.files[0])} />
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