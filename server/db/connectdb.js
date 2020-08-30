const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://admin:tiger@bluebar.7eimd.mongodb.net/Infinity?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;