import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getAllPosts } from '../services/api';

function Home(){


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

            {
                allPosts && allPosts.map((item, ind) => (
                    <ul key = {ind}>
                        <li>caption: {item.caption}</li>
                        <li>post image: {item.postImage}</li>
                        <li>username: {item.postedBy.username}</li>
                    </ul>
                ))
            }
        </>
    )
}

export default Home;