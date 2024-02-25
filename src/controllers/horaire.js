
const { Horaire,JourHoraire } = require('../db/sequelize') //importation du model (mais pas du schema)

// --- GET ROUTES ---
// --------- get one horaire by id -------
exports.getOneHoraire = (req, res, next) => {
    Horaire.findByPk(req.params.id) // id sent in URL (req.params)
      .then(horaire => {
        if(horaire === null) {
          const message = `L horaire demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un horaire a bien été trouvé.'
        res.status(200).json({ message, data: horaire })
      })
      .catch(error => {
        const message = `L horaire n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------

  // --------- get horaire details for 1 spot and 1 day -------
exports.getHoraireDetails = (req, res, next) => {

  JourHoraire.findAll({ // get the jour-horaire line...
    where: { //... where ...
      spot_id: parseInt(req.params.idSpot), //... id_spot match the one sent in url and...
      jour: parseInt(req.params.jour) //...the number of the day (in the year) match the one sent in url (req.params)
    },
    include: Horaire // ...and join the horaire table to get every infos (opening, closing, break...)
    
  }
    )
    .then(horaire => {
      if(horaire === null) {
        const message = `L horaire demandé n'existe pas. Réessayez avec un autre identifiant.`
        return res.status(404).json({ message })
      }

      const message = 'Un horaire a bien été trouvé.'
      res.status(200).json({ message, data: horaire[0].Horaire })//on ne renvoie que les infos de l'horaire du jour et du spot
    })
    .catch(error => {
      const message = `L horaire n'a pas pu être récupéré. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
}; // end of ------


// --- POST ROUTES ---
// --------- create new horaire -------
exports.createHoraire = (req, res, next) => {
  Horaire.create(req.body) //create with json infos sent in request body
         .then(horaire => {
           const message = `Le nouvel horaire a bien été crée.`
           res.status(201).json({ message, data: horaire })
         })
         .catch(error => {
           const message = `L horaire n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------


// --- UTILS ---
/* 
exports.deleteTableHoraire = (req, res, next) => {
  Horaire.drop()
  .then(
        res.status(201).json({ message:"table effacee"})
  )
  .catch(
    res.status(502).json({ message:"erreur de suppression de la table"})
  )
}; // end of -----------
 */