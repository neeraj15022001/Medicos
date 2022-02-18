const User = require("../../../models/User");
const jwt = require("jsonwebtoken");
module.exports.login = async (req, res) => {
    const user = req.body;
    console.log(req.body)
    try {
        let userFromDB = await User.findOne({email: user.email});
        if (!userFromDB || user.password !== userFromDB.password) {
            return res.json(422, {
                message: "Invalid username or password"
            })
        }
        return res.status(200).json({
            message: "User Found Successful",
            data: {
                token: jwt.sign(userFromDB.toJSON(), 'medicos', {expiresIn: '100000'})
            }
        })
    } catch (e) {
        return res.status(500).json({
            message: "Error Occurred",
            error: e
        })
    }

}
module.exports.register = async (req, res) => {
    const user = req.body;
    if (user.password !== user.confirmPassword) {
        return res.status(500).json({
            message: "Error occurred",
            error: "Password and Confirmed Password didn't match"
        })
    } else {
        let searchedUser = await User.findOne({email: user.email});
        if (searchedUser) {
            return res.json(200).json({
                message: "User Already Exist",
                data: {
                    user: searchedUser
                }
            })
        }
        try {
            let userCreated = await User.create(req.body);
            return res.status(200).json({
                message: "User Created Successfully",
                data: {
                    user: userCreated
                }
            });
        } catch (e) {
            return res.status(500).json({
                message: "Error occurred",
                error: e
            })
        }
    }

}
module.exports.logout = (req, res) => {
    // console.log(req.isAuthenticated(), req.user)
    // if (!req.isAuthenticated()) {
    //     return res.status(401).json({
    //         message: "Unauthorized Access"
    //     })
    // } else {
    console.log(req.user)
    req.logout();
    // req.session.destroy()
    return res.status(200).json({
        message: "User Logged Out Successfull"
    })
    // }

}

module.exports.profile = (req, res) => {
    return res.status(200).json({
        message: "Updating Profile",
        data: {
            user: req.user
        }
    })
    return res.status(404).json({
        message: "User Not Found"
    })

}