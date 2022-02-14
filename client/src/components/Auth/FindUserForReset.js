import React, { useState } from 'react';
import { usrByName } from '../services/api';
// import { useNavigate } from 'react-router-dom';
import ValidateUserByOtp from './ValidateUserByOtp';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const initialValue = {
    username: ''
}

function FindUserForReset(){

    const [userData, setUserData] = useState(initialValue);
    const [isNextComponent, setIsNextComponent] = useState(false);
    const [userDetailForVerification, setUserDetailForVerification] = useState({}); 
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    // console.log(userData);

    const validateUser = async(e) => {
        e.preventDefault();
        // console.log('printhua');    
        const apiResponse = await usrByName(userData);
        // console.log(apiResponse.userDetail);
        if(apiResponse.message === 'user exist'){
            toast.success('wohoo! user found!');
            setUserDetailForVerification(apiResponse.userDetail);
            setIsNextComponent(true);
        }else{
            // alert(apiResponse.message)
            toast.error(apiResponse.message);
        }
    }
    // console.log(userDetailForVerification);
    // console.log(isNextComponent);
    return(
        <>
            <form>
                <input type="text" name="username" disabled = {isNextComponent} onChange = { (e) => handleChange(e) } placeholder="username" required />
                <button type = 'submit' onClick = { (e) => validateUser(e)} disabled = {isNextComponent} >Find User</button>
            </form>
            {
                isNextComponent ? <ValidateUserByOtp data = {userDetailForVerification} /> : ''
            }
        </>
    )
}

export default FindUserForReset;