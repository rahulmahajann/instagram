import React from 'react';
import { Link } from 'react-router-dom';

function Home(){

    const data = localStorage.getItem('username');
    // console.log(data);

    const clickEvent = (e) => {
        // console.log('kuch click hua');
        
    }

    return(
        <>
            <h1>hello {data}</h1>
            <Link to = {`/profile/${data}`} onClick = {(e) => clickEvent()}>Profile</Link>
        </>
    )
}

export default Home;