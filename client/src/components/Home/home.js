import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home(){


    const data = localStorage.getItem('username');
    // console.log(data);
    const navigate = useNavigate();

    const clickEvent = (e) => {
        localStorage.clear();
        navigate('/')
    }

    return(
        <>
            <h1>hello {data}</h1>
            <Link to = {`/profile/${data}`}>Profile</Link>
            <button onClick = {() => clickEvent()}>LogOut</button>
        </>
    )
}

export default Home;