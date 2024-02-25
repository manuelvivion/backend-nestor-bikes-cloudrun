const express = require('express');
const router = express.Router();

const contratAccessCtrl = require('../controllers/contrat-access'); //import all Controllers functions from controllers/contra-access.js


router.get('/', contratAccessCtrl.getAllContratAccess); //no auth middleware needed
router.post('/', contratAccessCtrl.createContratAccess); //no auth middleware needed
//UTIL : router.post('/initTable', contratAccessCtrl.initContratAccessTable); //no auth middleware needed
//UTIL : router.delete('/reset', contratAccessCtrl.deleteTableContratAccess); 

module.exports = router;