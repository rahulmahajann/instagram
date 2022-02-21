const Post = require('../model/post');
const User = require('../model/user');

const createPost = async (req, res) => {
    
    // console.log(req.body);

    const caption = req.body.postInformation.caption;
    const postImage = req.body.postImage;

    const username = req.body.postInformation.postedBy;

    // console.log(caption, postImage);

    const userData = await User.findOne({username});

    // console.log(userData);

    if(!caption || !postImage){
        return res.json({
            message: false,
            information: 'please fill all the fields'
        })
    }

    const newPost = new Post({
        caption,
        postImage,
        postedBy: userData._id
    })
    
    await newPost.save()
    // console.log(newPost);
    res.json({
        message: true,
        post: newPost
    });

}

const getAllPost = async (req, res) => {
    const allPosts = await Post.find().populate({path: 'postedBy', select: 'username name' });

    console.log(allPosts);
    res.json({
        posts: allPosts
    })
}

const getUserPost = async (req, res) => {
    const username = req.body.userData;
    // console.log(username);

    const userInformation = await User.findOne({username})

    // console.log(userInformation._id);

    const postInformation = await Post.find({postedBy: userInformation._id})
    // console.log(postInformation);
    res.json(postInformation);

}

const addComment = async (req, res) => {
    console.log(req.body);

    const commentOn = req.body.commentOn;
    const commentCaption = req.body.commentCaption;
    const commentBy = req.body.commentBy;

    const dataToAdd = {
        commentCaption,
        commentBy,
    }

    await Post.findByIdAndUpdate(commentOn, {
        comment: dataToAdd
    })

}

module.exports = { createPost, getAllPost, getUserPost, addComment };