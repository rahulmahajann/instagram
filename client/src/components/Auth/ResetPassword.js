import React, {useState} from 'react';
import { resetpassword } from '../services/api';
import { useNavigate } from 'react-router-dom';

function ResetPassword(props){

    const userDetail = props.data;

    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();
        // console.log('click hua!');
        // console.log(userDetail._id, password);
        const apiResponse = await resetpassword(userDetail._id, password);
        // console.log(apiResponse);
        alert(apiResponse);
        navigate('/');

    }

    const handleChange = (e) => {
        setPassword(e.target.value);
    }
    // console.log(password);

    // console.log(userDetail);

    return(
        <form>
            <input type = 'password' name="password" placeholder="password" onChange={ (e) => handleChange(e) } required />
            <button type = 'submit' onClick={ (e) => submitHandler(e) }>Change Password</button>
        </form>
    )
}

export default ResetPassword;