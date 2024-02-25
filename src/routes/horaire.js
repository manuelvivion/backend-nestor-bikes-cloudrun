const express = require('express');
const router = express.Router();


const horaireCtrl = require('../controllers/horaire'); //import all Controllers functions from controllers/book.js

router.get('/:id', horaireCtrl.getOneHoraire); //no auth middleware needed
router.get('/detail/:idSpot/:jour', horaireCtrl.getHoraireDetails); //no auth middleware needed
router.post('/', horaireCtrl.createHoraire); 
// UTIL : router.delete('/reset', horaireCtrl.deleteTableHoraire); //no auth middleware needed

module.exports = router;