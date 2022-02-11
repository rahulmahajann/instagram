const User = require('../model/user');
const bcrypt = require('bcryptjs');

const signUp = async (req, res) => {
    const username = req.body.username;
    const emailId = req.body.emailId;
    const password = req.body.password;
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;

    if(!username || !emailId || !password || !name || !phoneNumber){
        return res.status(422).json({message: 'please fill all the fields'});
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
        return res.status(422).json({message: 'please fill all the fields'});        
    }

    const isUserName = await User.findOne({
        username: username
    })

    if(isUserName){
        const validPassword = await bcrypt.compare(password, isUserName.password);
        if(validPassword){
            return res.status(200).json({message: 'successfully logged in!'})
        }else{
            return res.status(422).json({message: 'username or password is not valid'})
        }
    }else{  
        return res.status(422).json({message: 'username or password is not valid'})
    }

}

module.exports = { signUp, signIn };