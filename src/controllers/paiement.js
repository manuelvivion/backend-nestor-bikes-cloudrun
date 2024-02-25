
const {Paiement} = require('../db/sequelize') //importation du model (mais pas du schema)
const Blowfish = require('blowfish-node');
const axeptaUser =require ('../config/axepta-config.js');
const ParseResponse = require('../utils/encrypt/keyValueParser.js')

// --- GET ROUTES ---
// --------- get one paiement by ref_contrat -------
exports.getOnePaiement = (req, res, next) => {
    Paiement.findAll({ //findAll : methode sequelize pour récupérer toute la table...
        where: {
          ref_contrat: req.params.ref //...mais on ajoute une condition sur l'id (comme findPK finalement)
        }})
      .then(paiement => {
        if(paiement === null || paiement.length===0) {
          const message = `L paiement demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const message = 'Un paiement a bien été trouvé.'
        res.status(200).json({ message, data: paiement})
      })
      .catch(error => {
        const message = `L paiement n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------

 
  

// --------- get one paiementby id -------
exports.getAllPaiement = (req, res, next) => {
  Paiement.findAll()
  .then( 
      (paiements) => {
        res.status(200).json(paiements); //return an array of JSON objects
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
exports.createPaiement = (req, res, next) => {
  Paiement.create(req.body ) // create with infos sent in request json body
         .then(paiement => {
           const message = `Le nouvel paiement a bien été crée.`
           res.status(201).json({ message, data: paiement })
         })
         .catch(error => {
           const message = `L paiement n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------

// --------- get all Jour-horaires controller -------
exports.checkPaiement = (req, res, next) => {

  const bf = new Blowfish(axeptaUser.blowfishPassword, Blowfish.MODE.ECB, Blowfish.PADDING.NULL); // only key isn't optional
// Turn Hex into Uint8Array
  const hex = Uint8Array.from(Buffer.from(req.body.Data, 'hex'));
  // Decode
  const decoded = bf.decode(hex, Blowfish.TYPE.STRING); 

  datas = new ParseResponse(decoded);
  let dataObject=datas.parse();
  //console.log(JSON.stringify(req.body));
  //res.json(dataObject);


  //console.log(req.query.refnr);
  /* let status = 0;
  if (req.query.Status ==="OK" || req.query.Status==="AUTHORIZED"){
    status=1;
  } */
  /* if(req.query.refnr){ //just to be sure that req is not empty */
     Paiement.create({
      contrat_id:0,
      ref_contrat:"JSON.stringify(req.body)",
      paye:9
    }) // 
         .then(paiement => {
           const message = `Le nouvel paiement a bien été crée.`
           res.status(201).json({ message, data: paiement })
         })
         .catch(error => {
           const message = `L paiement n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         }) 
        /* } */



}; // end of -----------



