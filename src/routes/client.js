const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/client'); //import all Controllers functions from controllers/book.js

router.get('/:id', clientCtrl.getOneClient); //no auth middleware needed
router.get('/', clientCtrl.getAllClient); //no auth middleware needed

//UTILS : router.post('/initTable', clientCtrl.initClientTable); 
//UTILS : router.delete('/reset', clientCtrl.deleteTableClient); 

module.exports = router;