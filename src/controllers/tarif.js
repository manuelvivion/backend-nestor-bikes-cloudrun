
const { Tarif} = require('../db/sequelize') //importation du model (mais pas du schema)


// --- GET ROUTES ---
// --------- get one tarif by id -------
exports.getOneTarif = (req, res, next) => {
    Tarif.findByPk(req.params.id) // id sent in url
      .then(tarif => {
        if(tarif === null) {
          const message = `L tarif demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const message = 'Un tarif a bien été trouvé.'
        res.status(200).json({ message, data: tarif})
      })
      .catch(error => {
        const message = `L tarif n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------

// --------- get one tarifby id -------
exports.getAllTarif = (req, res, next) => {
  Tarif.findAll()
  .then( 
      (tarifs) => {
        res.status(200).json(tarifs); //return an array of JSON objects
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
// --------- get all Jour-horaires controller -------
exports.createTarif = (req, res, next) => {
  Tarif.create(req.body ) // create with infos sent in request json body
         .then(tarif => {
           const message = `Le nouvel tarif a bien été crée.`
           res.status(201).json({ message, data: tarif })
         })
         .catch(error => {
           const message = `L tarif n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------


// --- UTILS --- 
/* 
// --------- get all Jour-horaires controller -------
exports.initTarifTable = (req, res, next) => {
  let count = 0;
  let problem =false;

  allTarifs.map((tarif)=>{
      Tarif.create(
          {
              demi:parseInt(tarif.demi),
              jour:parseInt(tarif.jour),
              vingt_quatre:parseInt(tarif['24h']),
              semaine:parseInt(tarif.semaine),
              dix_jours:parseInt(tarif['10jours']),
              deux_semaines:parseInt(tarif['2semaines']),
              trois_semaines:parseInt(tarif['3semaines']),
              mois:parseInt(tarif.mois),
              libelle:tarif.libelle
          }
          )
             .then(count++)
             .catch(problem=true)

  })
  
  if(!problem){
      const message = `La table a bien été remplie, ${count} tarifs ajoutés.`
       res.status(201).json({ message})
  }
  else{
      const message = `problème d'insertion dans la table tarif, count : ${count} .`
      res.status(500).json({ message})

  }

}; // end of -----------
 */
/* 
exports.deleteTableTarif = (req, res, next) => {
Tarif.drop()
.then(
      res.status(201).json({ message:"table effacee"})
)
.catch(
  res.status(502).json({ message:"erreur de suppression de la table"})
)
 

}; // end of -----------
 */

