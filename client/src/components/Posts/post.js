import React from 'react';

function Post(props) {

    const item = props.data;
    console.log(item);

    const post__frame = {
        backgroundColor: '#b54848',
        
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
        margin: '15px 0 0 20px',
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

    const post__comment = {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const comment__field ={
        width: '80%',
    }

    const comment__button = {
        width: '20%',
        whiteSpace: 'nowrap',
    }

    return(
        <div style = {complete__post}>
            <div style = {post__frame}>
                <h3 style = {post__username}>{item.postedBy.username}</h3>
                <hr style = {post__segregate} />
                <div><img style = {post__image} src = {item.postImage} alt  = 'sorry image phuk gayi'/></div>
                <hr style = {post__segregate} />
                <p style = {post__caption}> {item.postedBy.username} {item.caption}</p>
            </div>
            <div style = {post__comment}>
                <input style = {comment__field} type = 'text' />
                <button style = {comment__button} type = 'submit'> Add </button>
            </div>
        </div>
    )
}

export default Post;