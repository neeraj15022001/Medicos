const Medicine = require("../../../models/Medicine")
module.exports.post = async (req, res) => {
    const medicine = req.body;
    let medicineSearched = await Medicine.findOne({name: medicine.name, company: medicine.company});
    if (medicineSearched) {
        return res.status(200).json({
            message: "Medicine Already Exist",
            medicine: medicineSearched
        });
    }
    try {
        let medicineCreated = await Medicine.create(req.body);
        return res.status(200).json({
            message: "Medicine Posted",
            medicine: medicineCreated
        })
    } catch (e) {
        return res.status(500).json({
            message: "Error occured while posting medicine",
            error: e
        })
    }
}

module.exports.remove = async (req, res) => {
    try {
        let medicineSearched = await Medicine.findById(req.query.id);
        if (medicineSearched) {
            await Medicine.deleteOne({_id: medicineSearched._id});
            return res.status(200).json({
                message: "Message Deleted Successfully"
            })
        }
    } catch (e) {
        return res.status(500).json({
            message: "Error occured while deleting medicine",
            error: e
        })
    }


}
module.exports.find = async (req, res) => {
    try {
        let medicinesSearched = await Medicine.find({name: {$regex: req.query.name, $options: "gi"}});
        return res.status(200).json({
            message: `User Retrieved with search query ${req.query.name}`,
            medicines: medicinesSearched
        })
    } catch (e) {
        return res.status(500).json({
            message: "Error occurred while searching medicine",
            error: e
        })
    }
}
