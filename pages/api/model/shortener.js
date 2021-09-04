import mongoose from 'mongoose';

const Shortener = mongoose.model('shortener',{
    url: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

module.exports = Shortener;