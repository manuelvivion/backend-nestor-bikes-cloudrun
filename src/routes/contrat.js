const express = require('express');
const router = express.Router();

const contratCtrl = require('../controllers/contrat'); //import all Controllers functions from controllers/book.js

router.get('/:id', contratCtrl.getOneContrat); //no auth middleware needed
router.get('/', contratCtrl.getAllContrat); //no auth middleware needed
router.get('/period/:date1/:date2', contratCtrl.getAllContratPeriod); 
router.post('/', contratCtrl.createContrat); 
// UTIL : router.post('/initTable', contratCtrl.initContratTable); //no auth middleware needed
// UTIL : router.put('/resetid', contratCtrl.resetContratId); //no auth middleware needed
//UTIL : router.delete('/reset', contratCtrl.deleteTableContrat); 

module.exports = router;