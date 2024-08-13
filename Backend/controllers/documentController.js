// backend/controllers/documentController.js
const asyncHandler = require('express-async-handler');
const Document = require('../models/documentModel');

// Controller to get all documents
const getDocuments = asyncHandler(async (req, res) => {
  const documents = await Document.find();
  res.status(200).json(documents);
});

module.exports = {
  uploadDocument,
  getDocuments,
};
