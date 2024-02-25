const express = require('express');
const router = express.Router();

const contratArticleCtrl = require('../controllers/contrat-article'); //import all Controllers functions from controllers/book.js

router.get('/', contratArticleCtrl.getAllContratArticle); //no auth middleware needed
router.post('/', contratArticleCtrl.createContratArticle); //no auth middleware needed

// UTIL : router.post('/initTable', contratArticleCtrl.initContratArticleTable); //no auth middleware needed
// UTIL : router.delete('/reset', contratArticleCtrl.deleteTableContratArticle); 

module.exports = router;