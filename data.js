const mongoose = require("mongoose");
const { Schema } = mongoose;
const Urlschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
})
const Url = mongoose.model('Url', Urlschema);
module.exports = Url;