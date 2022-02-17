const mongoose = require('mongoose');

main()
    .then(db => {
        console.log("Connected Successfully")
        module.exports = db;
    })
    .catch(err => console.log(err));

async function main() {
    let db = await mongoose.connect('mongodb://localhost:27017/medicos');
    return db;
}