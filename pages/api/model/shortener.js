const mongoose = require('mongoose');
const Book = mongoose.model('books',{
    url: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
})

module.exports = Book;