
const {Spot} = require('../db/sequelize') //importation du model (mais pas du schema)

// --- GET ROUTES ---

// --------- get one horaire by id -------
exports.getOneSpot = (req, res, next) => {
    Spot.findByPk(req.params.id) //id sent in url (req.params)
      .then(spot => {
        if(spot === null) {
          const message = `L spot demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const message = 'Un spot a bien été trouvé.'
        res.status(200).json({ message, data: spot})
      })
      .catch(error => {
        const message = `L spot n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------


  // --------- get one spotby id -------
exports.getAllSpot = (req, res, next) => {
  Spot.findAll()
  .then( 
      (spots) => {
        res.status(200).json(spots); //return an array of JSON objects
      }
    )
    .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    )
    
}; // end of ------


// --- POST ROUTES ---
// --------- create new spot -------
exports.createSpot = (req, res, next) => {
  Spot.create(req.body ) //create on infos sent in request body (json)
         .then(spot => {
           const message = `Le nouvel spot a bien été crée.`
           res.status(201).json({ message, data: spot })
         })
         .catch(error => {
           const message = `L spot n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------


// ---  UTILS ---

/* exports.deleteTableSpot = (req, res, next) => {
  Spot.drop()
  .then(
        res.status(201).json({ message:"table effacee"})
  )
  .catch(
    res.status(502).json({ message:"erreur de suppression de la table"})
  )
   

}; // end of ----------- */