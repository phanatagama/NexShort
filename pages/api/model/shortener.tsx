import mongoose from 'mongoose';

const ShortenerSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

const Shortener = mongoose.models.shortener || mongoose.model('shortener', ShortenerSchema);

module.exports = Shortener;