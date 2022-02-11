import React from 'react';
import { Link } from 'react-router-dom';

const initialValue = {
    username: '',
    password: ''
}

function Login(){
    return(
        <>
            <form>
                <input type="text" name="username" placeholder="username" required />
                <input type = 'password' name="password" placeholder="password" required />
                <button type = 'submit'>Login</button>
            </form>
            <Link to = {'/resetpassword'}>
                <p>forgot password? Reset here!</p>
            </Link>
            <Link to = {'/signup'}>
                <p>don't have account? SingUp</p>
            </Link>
        </>
    )
}

export default Login;