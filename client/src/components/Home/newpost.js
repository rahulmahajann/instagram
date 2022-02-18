import React, { useEffect, useState } from 'react';
import { createNewPost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const initialValue = {
    caption: '',
    postedBy: ''
}

function NewPost(){

    
    const [postInformation, setPostInformation] = useState(initialValue);
    const [localImage, setLocalImage] = useState('');
    const [postImage, setPostImage] = useState('');
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    // const 

    // const imageDetails = () => {
    //     // e.preventDefault();
    //     const imageData = new FormData();
    //     imageData.append('file', localImage);
    //     imageData.append('upload_preset', 'instagrampost');
    //     imageData.append('cloud_name', 'rahulmahajan');
    //     console.log(imageData);
    //     fetch('https://api.cloudinary.com/v1_1/rahulmahajan/image/upload', {
    //         method: 'post',
    //         body: imageData
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setPostImage(data.url)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    // }

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
        // await imageDetails();

        // var bye = ''

        const imageData = new FormData();
        imageData.append('file', localImage);
        imageData.append('upload_preset', 'instagrampost');
        imageData.append('cloud_name', 'rahulmahajan');
        console.log(imageData);
        const keseHo = await fetch('https://api.cloudinary.com/v1_1/rahulmahajan/image/upload', {
            method: 'post',
            body: imageData
        })
        const res = await keseHo.json();
        // console.log(res.url);

        const data = await createNewPost(postInformation, res.url);
        if(data.message){
            toast.success('Post created Successfully')
            navigate(`/profile/${username}`)
        }else{
            toast.error(data.information);
        }
        // console.log(data.message);
    }

    // console.log(postInformation);
    // console.log(localImage);

    return(
        <>
            <form>
                <input name = 'caption' onChange = {(e) => handleChange(e)} placeholder="caption" />
                <input type = 'file' onChange = {(e) => setLocalImage(e.target.files[0])} />
                {/* <input name = 'postImage' onChange = {(e) => handleChange(e)} placeholder="image" /> */}
                <button type = 'submit' onClick = {(e) => savePost(e)}>Save Post</button>
            </form>
        </>
    )
}

export default NewPost;