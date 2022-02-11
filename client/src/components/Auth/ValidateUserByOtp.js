import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPassword from './ResetPassword';

function ValidateUserByOtp(props){
    const userDetail = props.data;
    // console.log(userDetail);
    const userPhoneNumber = userDetail.phoneNumber;
    const sliceUserPhoneNumber = userPhoneNumber.slice(6, userPhoneNumber.length);
    
    const navigate = useNavigate();
    const [otpValue, setOtpValue] = useState('');
    const [isResetScreen, setIsResetScreen] = useState(false);

    const handleChange = (e) => {
        setOtpValue(e.target.value)
    }
    // console.log(otpValue);


    const cancelButton = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log('click hua!');
        if(0==0){
            setIsResetScreen(true);
        }else{
            alert('entered otp is incorrect');
        }
    }

    return(
        <>
            <h3>Otp Shared on *****{sliceUserPhoneNumber}</h3>
            <form>
                <input type = 'text' disabled = {isResetScreen} name="Otp" placeholder="Enter Otp" onChange={ (e) => handleChange(e) } required />
                <button type = 'submit' disabled = {isResetScreen} onClick={ (e) => submitHandler(e) }>Validate Otp</button>
                <button type = 'submit' disabled = {isResetScreen} onClick={(e) => cancelButton(e)} >Cancel</button>
            </form>

            {isResetScreen ? <ResetPassword data = {userDetail} /> : ''}
        </>
    )
}

export default ValidateUserByOtp;