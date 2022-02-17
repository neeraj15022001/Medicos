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
            message: "Error occured",
            error: "Password and Confirmed Password didn't match"
        })
    } else {
        try {
            let userCreated = await User.create(req.body);
            return res.status(200).json({
                message: "User Created Successfully",
                user: userCreated
            });
        } catch (e) {
            return res.status(500).json({
                message: "Error occured",
                error: e
            })
        }
    }

}
module.exports.logout = (req, res) => {
    return res.status(200).json({
        message: "logout endpoint hit"
    })
}

module.exports.profile = (req, res) => {
    return res.status(200).json({
        message: "Updating Profile"
    })
}