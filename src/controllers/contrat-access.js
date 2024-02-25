
const { ContratAccess } = require('../db/sequelize') //importation du model (mais pas du schema)



// --- GET ROUTES 
  // --------- get one contratby id -------
  exports.getAllContratAccess = (req, res, next) => {
    ContratAccess.findAll()
    .then( 
        (contrats) => {
          res.status(200).json(contrats); //return an array of JSON objects
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



// --- POST ROUTES
// --------- Create COntrat-Accessory link  -------
exports.createContratAccess = (req, res, next) => {
   ContratAccess.create(req.body)  // create with infos sent in request body
          .then(contratAccess => {
            const message = `Le nouvel contratAccess a bien été crée.`
            res.status(201).json({ message, data: contratAccess })
          })
          .catch(error => {
            const message = `L contratAccess n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })

}; // end of -----------







// UTILS ROUTES
/* 
// --------- get all Jour-horaires controller -------
exports.initContratAccessTable = (req, res, next) => {
  let count = 0;
  let problem =false;

  allContratAccess.map((contratAccess)=>{
     
      ContratAccess.create(
          {
          article_id: parseInt(contratAccess.article_id),
          contrat_id: parseInt(contratAccess.contrat_id),
          qte: parseInt(contratAccess.qte),
          rendu: parseInt(contratAccess.rendu)
          }
          )
             .then((nouveauContrat)=>{
                 //console.log(nouveauContrat);
                 count++ ;

                  }
              )
             .catch((error)=>{
                 problem=true 
              })
         
  }) //end map
  
   if(!problem){
      const message = `La table a bien été remplie, ${count} contratAccesss ajoutés.`
       res.status(201).json({ message})
  }
  else{
      const message = `problème d'insertion dans la table contratAccess.`
      res.status(500).json({ message})

  } 
 
}; // end of -----------
 */

/*
exports.deleteTableContratAccess = (req, res, next) => {
ContratAccess.drop()
.then(
      res.status(201).json({ message:"table effacee"})
)
.catch(
  res.status(502).json({ message:"erreur de suppression de la table"})
)
 

}; // end of ----------- */

