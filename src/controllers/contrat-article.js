
const { ContratArticle } = require('../db/sequelize') //importation du model (mais pas du schema)


// --- GET ROUTES ---

  // --------- get one contratby id -------
  exports.getAllContratArticle = (req, res, next) => {
    ContratArticle.findAll()
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



// --- POST ROUTES ----

// --------- create contrat artcile link -------
exports.createContratArticle = (req, res, next) => {
   ContratArticle.create(req.body ) //create with infos sent in request body
          .then(contratArticle => {
            const message = `Le nouvel contratArticle a bien été crée.`
            res.status(201).json({ message, data: contratArticle })
          })
          .catch(error => {
            const message = `L contratArticle n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })

}; // end of -----------






// --- UTILS 
/* 
// --------- get all Jour-horaires controller -------
exports.initContratArticleTable = (req, res, next) => {
  let count = 0;
  let problem =false;
  let tailleList=[];
  let prenomList=[];
  let renduList=[];
  let currentIdArticle="5";
  let tempContrat="";
  let tempQte="";

  allContratArticles.map((contratArticle)=>{

      if(contratArticle.article_id===currentIdArticle){//same article, we push

          tailleList.push(contratArticle.taille);
          prenomList.push(contratArticle.prenom);
          renduList.push(contratArticle.rendu);
          currentIdArticle=contratArticle.article_id;
          tempContrat=contratArticle.contrat_id;
          tempQte=contratArticle.qte;
      }
      else{ //article change, we add it to table
     
      ContratArticle.create(
          {
          article_id: parseInt(currentIdArticle),
          contrat_id: parseInt(tempContrat),
          qte: parseInt(tempQte),
          taille: tailleList,
          prenom: prenomList,
          rendu:renduList
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
         
              tailleList=[];
              tailleList.push(contratArticle.taille);
              prenomList=[];
              prenomList.push(contratArticle.prenom);
              renduList=[];
              renduList.push(contratArticle.rendu);
              currentIdArticle=contratArticle.article_id;
              tempContrat=contratArticle.contrat_id;
              tempQte=contratArticle.qte;

      }//end else
  }) //end map
  
   if(!problem){
      const message = `La table a bien été remplie, ${count} contratArticles ajoutés.`
       res.status(201).json({ message})
  }
  else{
      const message = `problème d'insertion dans la table contratArticle.`
      res.status(500).json({ message})

  } 

}; // end of -----------
 */
/* 
exports.deleteTableContratArticle = (req, res, next) => {
ContratArticle.drop()
.then(
      res.status(201).json({ message:"table effacee"})
)
.catch(
  res.status(502).json({ message:"erreur de suppression de la table"})
)
 

}; // end of ----------- */



