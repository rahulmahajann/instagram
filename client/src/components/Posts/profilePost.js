import React from 'react';
import Comment from '../social/comment';

function Post(props) {

    const item = props.data;
    // console.log(item);

    const post__frame = {
        backgroundColor: '#285dad',
        
        margin: '20px auto',
        width: '80%'
    }

    const post__image = {
        width: '80%',
        height: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const post__username = {
        margin: '20px 0 0 20px',
        padding: 0,
        fontSize: '25px'
    }

    const post__segregate = {
        color: 'black'
    }

    const post__caption = {
        margin: '5px 0 0 20px',
        fontSize: '20px',
    }

    const complete__post = {
        backgroundColor: 'orange',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style = {complete__post} >
            <div style = {post__frame}>
                <h3 style = {post__username}>{item.postedBy}</h3>
                <hr style = {post__segregate} />
                <div><img style = {post__image} src = {item.postImage} alt  = 'sorry image phuk gayi'/></div>
                <hr style = {post__segregate} />
                <p style = {post__caption}>{item.caption}</p>
            </div>

            <Comment commentOf = {item._id} />
        </div>
    )
}

export default Post;