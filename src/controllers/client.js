
const { Client } = require('../db/sequelize') //importation du model (mais pas du schema)
const Sequelize = require('sequelize'); //besoin du module Sequelize...
const Op = Sequelize.Op; //...pour utiliser les opérateurs pour les requetes





// -----GET ROUTES
// --------- get all clients-------
exports.getAllClient = (req, res, next) => {

  Client.findAll()
  .then( //findAll() sequelize method called for Client model -> return all book objects
      (clients) => {
        res.status(200).json(clients); //return an array of JSON objects
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

// --------- get one horaire by id -------
exports.getOneClient = (req, res, next) => {
  Client.findByPk(req.params.id)
    .then(client => {
      if(client === null) {
        const message = `L client demandé n'existe pas. Réessayez avec un autre identifiant.`
        return res.status(404).json({ message })
      }

      const message = 'Un client a bien été trouvé.'
      res.status(200).json({ message, data: client})
    })
    .catch(error => {
      const message = `L client n'a pas pu être récupéré. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
}; // end of ------

// --------- get one horaire by id -------
exports.findOneClient = (req, res, next) => {
  Client.findAll({
    where: { //... looking for client where ...
      [Op.or]: [
        {tel: req.params.tel}, //... phone number match the one sent in url and...
        {email: req.params.email} //...or email match the one sent in url (req.params)
      ]
    },
  })
    .then(client => {
      
      if(client === null || client.length===0) {
        const message = `L client demandé n'existe pas. Réessayez avec un autre tel ou mail.`
        return res.status(230).json({ message })
      }

      const message = 'Un client a bien été trouvé.'
      res.status(200).json({ message, data: client})
    })
    .catch(error => {
      const message = `L client n'a pas pu être récupéré. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
}; // end of ------



// ---POST ROUTES ---
// --------- Create client -------
exports.createClient = (req, res, next) => {
   Client.create(req.body ) //use sequelize 'create' method with infos sent in the request body (json object)
          .then(client => { // if creation ok, we get the created client
            const message = `Le nouvel client a bien été crée.`
            res.status(201).json({ message, data: client }) //send it back to front end
          })
          .catch(error => {
            const message = `L client n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })

}; // end of -----------

// ---PUT ROUTES ---
// --------- Create client -------
exports.updateClient = (req, res, next) => {
       //Client.update(req.body ) //use sequelize 'create' method with infos sent in the request body (json object)
         Client.update(req.body, {
          where: {
             id_client: req.params.id,
          },
        }) 
         .then(
              Client.findAll({
              where: { 
                  id_client: req.params.id
                }
              })
              .then(client => {
                if(client === null || client.length===0) {
                  const message = `L client demandé n'existe pas. Réessayez avec un autre tel ou mail.`
                  return res.status(230).json({ message })
                }
                const message = 'Un client a bien été modifié.'
                res.status(200).json({ message, data: client})
             }) //end then promise find
         .catch(error => {
           const message = `L client n'a pas pu être modifié. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })
      )//end then promise update
}; // end of -----------




/* 
// UTILS ROUTES
// --------- init client table -------
exports.initClientTable = (req, res, next) => {
    let count = 0;
    let problem =false;

    allClients.map((client)=>{
        Client.create(
            {
            id_client:client.id_client===""?" - ":client.id_client,
            prenom: client.prenom===""?" - ":client.prenom,
            nom: client.nom===""?" - ":client.nom,
            email: client.email===""?" - ":client.email,
            tel: client.tel===""?" - ":client.tel,
            adresse: client.adresse===""?" - ":client.adresse,
            adresse_comp: client.adresse_comp===""?" - ":client.adresse_comp,
            cp: client.cp===""?" - ":client.cp,
            ville: client.ville===""?" - ":client.ville,
            country: client.country===""?" - ":client.country,
            }
            )
               .then(_=>{
                   count++ 
                    }
                )
               .catch((error)=>{
                   problem=true 
                })

    })
    
     if(!problem){
        const message = `La table a bien été remplie, ${count} clients ajoutés.`
         res.status(201).json({ message})
    }
    else{
        const message = `problème d'insertion dans la table client.`
        res.status(500).json({ message})

    }
 
 }; // end of -----------

exports.deleteTableClient = (req, res, next) => {
  Client.drop()
  .then(
        res.status(201).json({ message:"table effacee"})
  )
  .catch(
    res.status(502).json({ message:"erreur de suppression de la table"})
  )
   

}; // end of -----------
 */




 

