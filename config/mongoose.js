const mongoose = require('mongoose');

main()
    .then(db => {
        console.log("Connected Successfully")
    })
    .catch(err => console.log(err));

async function main() {
    const dbURL = 'mongodb://localhost:27017/medicos'
    let db = await mongoose.connect(dbURL, {});
    return db;
}