const User = require('../model/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');

const JWT_SECRET = 'fghjmnvgnv';

const signUp = async (req, res) => {
    const username = req.body.username;
    const emailId = req.body.emailId;
    const password = req.body.password;
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;

    if(!username || !emailId || !password || !name || !phoneNumber){
        return res.json({message: 'please fill all the fields'});
    }

    const isUserName = await User.findOne({
        username: username
    })

    const isEmailId = await User.findOne({
        emailId: emailId
    })

    const isPhoneNumber = await User.findOne({
        phoneNumber: phoneNumber
    })

    // console.log(isUserName, isEmailId, isPhoneNumber);

    if(isUserName || isEmailId || isPhoneNumber){
        console.log('duplicay found');
        return res.json({message: 'duplicay found'})
    }else{

        const encryptedPassword = await bcrypt.hash(password, 15);

        const user = new User({
            username,
            emailId,
            password: encryptedPassword,
            name,
            phoneNumber
        });

        user.save();
        console.log('signup successfull');
        res.status(200).json({message: 'signup successfull'});
    }
}

const signIn = async (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        return res.json({message: 'please fill all the fields'});        
    }

    const isUserName = await User.findOne({
        username: username
    })

    if(isUserName){
        const validPassword = await bcrypt.compare(password, isUserName.password);
        if(validPassword){
            const token = JWT.sign({_id: isUserName._id}, JWT_SECRET);
            return res.json({
                message: 'successfully logged in!',
                token,
                nameOfUser: isUserName.name
            })
        }else{
            return res.json({message: 'username or password is not valid'})
        }
    }else{  
        return res.json({message: 'username or password is not valid'})
    }

}

const findUserByUserName = async (req, res) => {
    const username = req.body.username;
    
    if(!username){
        return res.json({message: 'please enter the username for resetting the password'});        
    }

    const isUserName = await User.findOne({
        username: username
    })

    if(isUserName){
        return res.json({
            message: 'user exist',
            userDetail: isUserName
        })
    }else{
        return res.json({message: "this username doesn't exist"})
    }
    
}

const resetPassword = async (req, res) => {
    const id = req.body.userData;
    const password = req.body.password;

    console.log(req.body);
    console.log(id, password);

    const newPassword = await bcrypt.hash(password, 15);

    const oldUser = User.findOne({_id: id})
    // console.log(oldUser);

    await User.findByIdAndUpdate(id, {
        password: newPassword
    })
    
    res.json('password changed successfully');

    const newUser = User.find({_id: id})
    // console.log(newUser);

}

const sendemail = async (req, res) => {
    const emailId = 'mehulp1612@gmail.com'

    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'instagramclone0201@gmail.com',
            pass: 'fjdklahntkkfsdwm'
        }
    })

    const mailOptions = {
        from: 'instagramclone0201@gmail.com',
        to: emailId,
        subject: 'password lelo bhai!',
        text: 'fjdklahntkkfsdwm'
    }

    transpoter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(info.response);
        }
    })
}

module.exports = { signUp, signIn, findUserByUserName, resetPassword, sendemail };