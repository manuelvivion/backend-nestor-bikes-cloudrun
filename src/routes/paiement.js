const express = require('express');
const router = express.Router();

const paiementCtrl = require('../controllers/paiement'); //import all Controllers functions from controllers/paiement.js


router.get('/:ref', paiementCtrl.getOnePaiement); //no auth middleware needed
router.get('/', paiementCtrl.getAllPaiement); //no auth middleware needed
router.post('/', paiementCtrl.createPaiement); //no auth middleware needed
router.post('/check', paiementCtrl.checkPaiement); //no auth middleware needed
//UTIL : router.post('/initTable', paiementCtrl.initTarifTable); //no auth middleware needed
//UTIL : router.delete('/reset', paiementCtrl.deleteTablePaiement); 

module.exports = router;