const User = require('../model/user');

const getUserDetail = async (req, res) => {
    const username = await req.body.userData;
    // console.log(req.body);
    // console.log(username);

    const userInformation = await User.findOne({username: username});

    // const info = {...userInformation}
    // console.log(userInformation);

    res.json(userInformation);

}

module.exports = {getUserDetail};