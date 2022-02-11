import React from 'react';

function Home(){

    const data = localStorage.getItem('name')

    return(
        <>
            <h1>hello {data}</h1>
        </>
    )
}

export default Home;