const express = require('express');
const router = express.Router();


const jourHoraireCtrl = require('../controllers/jour-horaire'); //import all Controllers functions from controllers/book.js

router.get('/', jourHoraireCtrl.getAllJourHoraire); //no auth middleware needed
// UTIL : router.post('/setNewJourHoraire/:jourDeb/:jourFin/:horaire_id/:spot_id', jourHoraireCtrl.setNewJourHoraire); //no auth middleware needed
// UTIL : router.post('/setAllJourHoraire', jourHoraireCtrl.setAllJourHoraire); //no auth middleware needed

module.exports = router;