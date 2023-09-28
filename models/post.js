const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    //Adicionar mais campos conforme necessário.
});

module.exports = mongoose.model('Post', PostSchema);