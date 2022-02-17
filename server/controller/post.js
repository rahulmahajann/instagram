const Post = require('../model/post');
const User = require('../model/user');

const createPost = async (req, res) => {
    
    const caption = req.body.caption;
    const postImage = req.body.postImage;

    const username = req.body.postedBy;

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
    console.log(newPost);
    res.json({
        message: true,
        post: newPost
    });

}

const getAllPost = async (req, res) => {
    const allPosts = await Post.find().populate({path: 'postedBy', select: 'username name' });

    console.log(allPosts);
    res.json('kuch mila')
}

const getUserPost = async (req, res) => {
    const username = req.body.userData;
    console.log(username);

    const userInformation = await User.findOne({username})

    console.log(userInformation._id);

    const postInformation = await Post.find({postedBy: userInformation._id})
    console.log(postInformation);
    res.json(postInformation);

}

module.exports = { createPost, getAllPost, getUserPost };