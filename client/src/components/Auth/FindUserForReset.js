import React, { useState } from 'react';
import { usrByName } from '../services/api';
import { useNavigate } from 'react-router-dom';
import ValidateUserByOtp from './ValidateUserByOtp';

const initialValue = {
    username: ''
}

function FindUserForReset(){

    const [userData, setUserData] = useState(initialValue);
    const [isNextComponent, setIsNextComponent] = useState(false);
    const [userDetailForVerification, setUserDetailForVerification] = useState({}); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    console.log(userData);

    const validateUser = async(e) => {
        e.preventDefault();
        console.log('printhua');    
        const apiResponse = await usrByName(userData);
        console.log(apiResponse.userDetail);
        if(apiResponse.message === 'user exist'){
            setUserDetailForVerification(apiResponse.userDetail);
            setIsNextComponent(true);
        }else{
            alert(apiResponse.message)
        }
    }
    console.log(userDetailForVerification);
    console.log(isNextComponent);
    return(
        <>
            <form>
                <input type="text" name="username" disabled = {isNextComponent} onChange = { (e) => handleChange(e) } placeholder="username" required />
                <button type = 'submit' onClick = { (e) => validateUser(e) }>Find User</button>
            </form>
            {
                isNextComponent ? <ValidateUserByOtp data = {userDetailForVerification} /> : ''
            }
        </>
    )
}

export default FindUserForReset;