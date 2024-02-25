const express = require('express');
const router = express.Router();

const tarifCtrl = require('../controllers/tarif'); //import all Controllers functions from controllers/book.js

router.get('/:id', tarifCtrl.getOneTarif); //no auth middleware needed
router.get('/', tarifCtrl.getAllTarif); //no auth middleware needed
router.post('/', tarifCtrl.createTarif); //no auth middleware needed
//UTIL : router.post('/initTable', tarifCtrl.initTarifTable); //no auth middleware needed
//UTIL : router.delete('/reset', tarifCtrl.deleteTableTarif); 

module.exports = router;