
const { Contrat, ContratArticle, ContratAccess, Spot, Client } = require('../db/sequelize') //importation du model (mais pas du schema)
const Sequelize = require('sequelize'); // we need sequelize...
const Op = Sequelize.Op; //...to use Op erators in requests



// --- GET ROUTES

// --------- get one contrat by id -------
exports.getOneContrat = (req, res, next) => {
    Contrat.findByPk(req.params.id) //id sent in URL
      .then(contrat => {
        if(contrat === null) {
          const message = `L contrat demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un contrat a bien été trouvé.'
        res.status(200).json({ message, data: contrat})
      })
      .catch(error => {
        const message = `L contrat n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------


  // --------- get all contracts (join with articles, access, spot and client) -------
exports.getAllContrat = (req, res, next) => {
  Contrat.findAll({ //get All contracts in the table ...
    include: [ContratArticle, ContratAccess, Spot, Client] //...joining tables for articles, accessory, spot and client for each contract
  })
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


// get contracts for a defined duration, between date1 and date2 (included)
exports.getAllContratPeriod = (req, res, next) => {
    Contrat.findAll({ //get all contracts...
      where: { // ...where 
        date1: {[Op.gte]: new Date(req.params.date1)}, //beginning date is "greater or equal" ([op.gte]) than date1 sent in URL (req.param.date1)
        date2: {[Op.lte]: new Date(req.params.date2)} //end date is "lower or equal" ([op.lte]) than date2 sent in URL (req.param.date2)
      },
      include: [ContratArticle, ContratAccess, Spot, Client] //...the matching contracts join articles, accessories, spot and client 
    })
    .then(
        (contrats) => {
          res.status(200).json(contrats); //return an array of JSON objects (multiple levels due to join)
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
// --------- create contrat -------
exports.createContrat = (req, res, next) => {
  Contrat.create(req.body ) // create with infos sent in request body
         .then(contrat => {
           const message = `Le nouvel contrat a bien été crée.`
           res.status(201).json({ message, data: contrat })
         })
         .catch(error => {
           const message = `L contrat n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------




  // --- UTILS ---
  /* 
// --------- get all Jour-horaires controller -------
exports.initContratTable = (req, res, next) => {
    let count = 0;
    let problem =false;

    allContrats.map((contrat)=>{
        Contrat.create(
            {
            id_contrat: parseInt(contrat.id_contrat),
            ref_contrat: contrat.ref_contrat===""?" - ":contrat.ref_contrat,
            client_id: parseInt(contrat.client_id),
            spot_id: parseInt(contrat.spot_id),
            date1: contrat.date1,
            date2: contrat.date2,
            h1:parseInt(contrat.h1),
            h2:parseInt(contrat.h2),
            total:parseInt(contrat.total),
            solde : 0,
            commentaire:contrat.commentaire===""?" - ":contrat.commentaire,
            commentaire2:"-",
            date_crea:contrat.date_crea,
            resa:parseInt(contrat.resa)===0?false:true,
            paye:parseInt(contrat.paye),
            retour:parseInt(contrat.retour)===0?false:true,
            livraison:parseInt(contrat.livraison)===0?false:true,
            adresse_livraison:contrat.adresse_livraison===""?" - ":contrat.adresse_livraison,
            garantie:contrat.garantie===""?" - ":contrat.garantie
            }
            )
               .then((contrat)=>{
                   count++ 
                    }
                )
               .catch((error)=>{
                   problem=true 
                })

    })
    
     if(!problem){
        const message = `La table a bien été remplie, ${count} contrats ajoutés.`
         res.status(201).json({ message})
    }
    else{
        const message = `problème d'insertion dans la table contrat.`
        res.status(500).json({ message})

    }
 
 }; // end of -----------
 */

/* exports.deleteTableContrat = (req, res, next) => {
  Contrat.drop()
  .then(
        res.status(201).json({ message:"table effacee"})
  )
  .catch(
    res.status(502).json({ message:"erreur de suppression de la table"})
  )
   

}; // end of ----------- */

/* exports.resetContratId = (req, res, next) => {

  Contrat.findAll()
  .then( //find() method called for 'Book' model -> return all book objects
      (contrats) => {
        contrats.map((contrat)=>{
          contrat.decrement('id_contrat',{by:4})
        })
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
 */