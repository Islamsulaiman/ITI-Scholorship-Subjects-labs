const mongoose = require('mongoose');

const notiSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 20,
    },
}, {
    timestamps: true,
});

const Noti = mongoose.model('Noti', notiSchema);

module.exports = Noti;
