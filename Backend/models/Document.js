// backend/models/Document.js
const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    uploadedBy: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
