import React from 'react';
import { useNavigate } from 'react-router-dom';

function ValidateUserByOtp(props){
    const userDetail = props.data;
    console.log(userDetail);
    
    const navigate = useNavigate();

    const userPhoneNumber = userDetail.phoneNumber;
    console.log(userPhoneNumber.length, typeof(userPhoneNumber));
    const sliceUserPhoneNumber = userPhoneNumber.slice(6, userPhoneNumber.length);
    console.log(sliceUserPhoneNumber);

    const cancelButton = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('click hua!');
    }

    return(
        <>
            <h3>Otp Shared on *****{sliceUserPhoneNumber}</h3>
            <form>
                <input type = 'text' name="Otp" placeholder="Enter Otp" required />
                <button type = 'submit' onClick={ (e) => submitHandler(e) }>Validate Otp</button>
                <button type = 'submit' onClick={(e) => cancelButton(e)} >Cancel</button>
            </form>
        </>
    )
}

export default ValidateUserByOtp;