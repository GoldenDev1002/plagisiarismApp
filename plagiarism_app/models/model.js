let mongoose = require("mongoose");
let documentSchema = mongoose.Schema;

let eachDocument = new documentSchema({
    title : String,
    eachFile: String
}, {createdAt: -1});

let eachCollection = mongoose.model("plagiarismDatabase", eachDocument)

module.exports = eachCollection;