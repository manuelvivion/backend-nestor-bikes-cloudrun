const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article'); //import all Controllers functions from controllers/book.js

router.get('/:id', articleCtrl.getOneArticle); //no auth middleware needed
router.get('/:id/tarif', articleCtrl.getOneArticleTarif); //no auth middleware needed
router.get('/', articleCtrl.getAllArticle); //no auth middleware needed
router.get('/access/all', articleCtrl.getAllAccessory); //no auth middleware needed
//UTILS : router.post('/initTable', articleCtrl.initArticleTable); 
//UTILS : router.delete('/reset', articleCtrl.deleteTableArticle); 

module.exports = router;