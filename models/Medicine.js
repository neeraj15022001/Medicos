const mongoose = require("mongoose");
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    expiry: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    currency: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    availability: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

const Medicine = mongoose.model("medicines", medicineSchema);
module.exports = Medicine;