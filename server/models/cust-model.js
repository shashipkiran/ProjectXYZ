const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customer = new Schema({
        name: { type: String },
        orgid: { type: String },
        contact: { type: String },
        email: { type: String },
        phone: { type: String },
        addr1: { type: String },
        addr2: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zipcode: { type: String },
        instruct: { type: String },
        status: { type: Number },
    },
    { timestamps: true },
);

module.exports = mongoose.model('customers', customer);