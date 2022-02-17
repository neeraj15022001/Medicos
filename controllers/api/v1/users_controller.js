const User = require("../../../models/User");
module.exports.login = async (req, res) => {
    const user = req.body;
    try {
        let userFromDB = await User.findOne({email: user.email});
        return res.status(200).json({
            message: "User Found Successfull",
            user: userFromDB
        })
    } catch (e) {
        return res.status(500).json({
            message: "Error Occured",
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
        if(searchedUser) {
            return res.json(200).json({
                message: "User Already Exist",
                user: searchedUser
            })
        }
        try {
            let userCreated = await User.create(req.body);
            return res.status(200).json({
                message: "User Created Successfully",
                user: userCreated
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
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    } else {
        req.logout();
        req.session.destroy()
        return res.status(200).json({
            message: "User Logged Out Successfull"
        })
    }

}

module.exports.profile = (req, res) => {
    if(req.isAuthenticated()) {
        return res.status(200).json({
            message: "Updating Profile",
            user: req.user
        })
    }
    return res.status(404).json({
        message: "User Not Found"
    })

}