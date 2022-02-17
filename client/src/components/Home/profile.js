import React, { useEffect, useState } from 'react';
import { getUserDetails, getUserPosts } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Profile(){

    const [data, setData] = useState('')
    const username = localStorage.getItem('username');

    console.log(username);

    const navigate = useNavigate()

    const handleChange = (e) => {
        navigate('/createnewpost')
    }

    useEffect(() => {
        const fetchData = async() => {
            console.log(username);
            const data = await getUserDetails(username);
            // console.log(data);
            // const postData = await getUserPosts(username);
            setData(data)
        }
        const fetchPost = async () => {
            console.log(username);
            const postData = await getUserPosts(username);
        }
        fetchData();
        fetchPost();
    }, [])

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         console.log(username);
    //         const postData = await getUserPosts(username);
    //     }
    //     fetchPost();
    // })
    console.log(data);
    const newData = Object.values(data)
    console.log(newData);
    newData.map(item => {
        console.log(item);
    })
    return(

        <>
            {
                newData && newData.map(item => (
                    <p>{item}</p>
                ))
            }
            
            <button onClick={(e) => handleChange(e)}>
                Create New Post
            </button>
        </>
    )
}

export default Profile;