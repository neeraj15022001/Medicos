module.exports.post = (req, res) => {
    return res.status(200).json({
        message: "Medicine Posted"
    })
}

module.exports.remove = (req, res) => {
    return res.status(200).json({
        message: "Medicine Removed"
    })
}
module.exports.find = (req, res) => {
    return res.status(200).json({
        message: "Finding Medicine"
    })
}
