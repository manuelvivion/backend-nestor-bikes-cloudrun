const express = require('express');
const router = express.Router();

const spotCtrl = require('../controllers/spot'); //import all Controllers functions from controllers/book.js

router.get('/:id', spotCtrl.getOneSpot); //no auth middleware needed
router.get('/', spotCtrl.getAllSpot); //no auth middleware needed
router.post('/', spotCtrl.createSpot); //no auth middleware needed
// UTIL : router.delete('/reset', spotCtrl.deleteTableSpot); 

module.exports = router;