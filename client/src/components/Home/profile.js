import React, { useEffect, useState } from 'react';
import { getUserDetails, getUserPosts } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import ProfilePost from '../Posts/profilePost';

function Profile(){


    const profile__navbar = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'cyan',
    }

    const profile__navbarItems = {
        margin: '10px'
    }

    const [data, setData] = useState('')
    const [postData, setPostData] = useState('');
    const username = localStorage.getItem('username');

    // console.log(username);

    const navigate = useNavigate()

    const handleChange = (e) => {
        navigate('/createnewpost')
    }

    useEffect(() => {
        const fetchData = async() => {
            // console.log(username);
            const data = await getUserDetails(username);
            // console.log(data);
            // const postData = await getUserPosts(username);
            setData(data)
        }
        const fetchPost = async () => {
            // console.log(username);
            const postData = await getUserPosts(username);
            // console.log(postData);
            setPostData(postData);
        }
        fetchData();
        fetchPost();
    }, [])

    // console.log(postData);
    const newData = Object.values(data)
    console.log(newData);
    
    return(

        <>

            <div style = {profile__navbar} >
                <button style = {profile__navbarItems} onClick={(e) => handleChange(e)}>
                    Create New Post
                </button>
                <Link to = {'/home'} style = {profile__navbarItems} >Home</Link>
            </div>

            {
                newData && newData.map((item, ind) => (
                    <p key = {ind}>{item}</p>
                ))
            }

            

            {
                postData && postData.map((item, ind) => (
                    <ProfilePost data = {item} />
                ))
            }
            
            
        </>
    )
}

export default Profile;