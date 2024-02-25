

const { JourHoraire } = require('../db/sequelize') //importation du model (mais pas du schema)


// GET ROUTES
// --------- get all Jour-horaires controller -------
exports.getAllJourHoraire = (req, res, next) => {
    JourHoraire.findAll().then(
      (jourHoraires) => {
        res.status(200).json(jourHoraires); //return an array of JSON objects
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    ); 
  }; // end of get all jourHoraires controller



  // --- UTILS ---
/* 
// --------- set all Jour-horaires controller -------
exports.setAllJourHoraire = (req, res, next) => {
  let count = 0;
  let problem =false;

  jourHoraireList.map(jourHoraire => {
      JourHoraire.create({
        horaire_id: parseInt(jourHoraire.horaire_id),
        spot_id: parseInt(jourHoraire.spot_id),
        jour: parseInt(jourHoraire.jour)
      })
      .then(count++)
      .catch(problem=true)
    })

  if (!problem){
      res.status(200).json({message:`${count} lignes ont bien été ajoutées`});
  }
  else{
      res.status(400).json({message:`problème d'insertion, ${count} lignes ont quand même été ajoutées`});
  }

}; // end of get all jourHoraires controller
 */

// --------- set all Jour-horaires controller -------
exports.setNewJourHoraire = (req, res, next) => {
  let count = 0;
  let problem =false;
  let deb = parseInt(req.params.jourDeb);
  let fin = parseInt(req.params.jourFin);

  for (let i=deb ; i<=fin ; i++) {
      JourHoraire.create({
        horaire_id: parseInt(req.params.horaire_id),
        spot_id: parseInt(req.params.spot_id),
        jour:i
      })
      .then(count++)
      .catch(problem=true)
    }

  if (!problem){
      res.status(200).json({message:`${count} lignes ont bien été ajoutées`});
  }
  else{
      res.status(400).json({message:`problème d'insertion, ${count} lignes ont quand même été ajoutées`});
  }

}; // end of get all jourHoraires controller
 