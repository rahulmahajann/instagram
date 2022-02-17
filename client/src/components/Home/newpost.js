import React, { useEffect, useState } from 'react';
import { createNewPost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const initialValue = {
    caption: '',
    postImage: '',
    postedBy: ''
}

function NewPost(){

    
    const [postInformation, setPostInformation] = useState(initialValue);
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    // const 

    useEffect(()=> {
        setPostInformation({
            ...postInformation,
            postedBy: username
        })
    }, [])

    const handleChange = (e) => {
        setPostInformation({
            ...postInformation,
            [e.target.name]: e.target.value
        })
    }

    const savePost = async (e) => {
        e.preventDefault();
        // console.log(postInformation);
        // const data = await 
        const data = await createNewPost(postInformation);
        if(data.message){
            toast.success('Post created Successfully')
            navigate(`/profile/${username}`)
        }else{
            toast.error(data.information);
        }
        // console.log(data.message);
    }

    // console.log(postInformation);

    return(
        <>
            <form>
                <input name = 'caption' onChange = {(e) => handleChange(e)} placeholder="caption" />
                <input name = 'postImage' onChange = {(e) => handleChange(e)} placeholder="image" />
                <button type = 'submit' onClick = {(e) => savePost(e)}>Save Post</button>
            </form>
        </>
    )
}

export default NewPost;