const mongoose = require('mongoose');
const Schema = mongoose.Schema

const chatthreads = new Schema({
        orgid: { type: String },
        client: { type: String },
        employee: { type: String },
        status: { type: Number },
    },
    { timestamps: true },
);

module.exports = mongoose.model('chatthreads', chatthreads);