import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Post from '../Posts/post';

import { getAllPosts } from '../services/api';

function Home(){

    const home__component = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'

    }

    const data = localStorage.getItem('username');
    // console.log(data);

    const [allPosts, setAllPosts] = useState('');

    const navigate = useNavigate();

    const clickEvent = (e) => {
        localStorage.clear();
        navigate('/')
    }

    useEffect(() => {
        const fetchAllPosts  = async () => {
            const allPostsData = await getAllPosts();
            setAllPosts(allPostsData.posts);
        }
        fetchAllPosts();
    }, [])

    // console.log(allPosts);

    return(
        <>
            <h1>hello {data}</h1>
            <Link to = {`/profile/${data}`}>Profile</Link>
            <button onClick = {() => clickEvent()}>LogOut</button>
            <div style = {home__component} >

            {
                allPosts && allPosts.map((item, ind) => (
                    <Post data = {item} />
                ))
            }
            </div>
        </>
    )
}

export default Home;