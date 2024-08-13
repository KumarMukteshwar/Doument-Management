// backend/routes/documentRoutes.js
const express = require('express');
const { uploadDocument, getDocuments } = require('../controllers/documentController');

const router = express.Router();

// Route to handle document upload
router.post('/upload', uploadDocument);

// Route to get all documents
router.get('/', getDocuments);

module.exports = router;
