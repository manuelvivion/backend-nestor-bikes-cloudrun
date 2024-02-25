
const { Article,Tarif } = require('../db/sequelize') //importation du model (mais pas du schema)

// --- GET ROUTES ---
// --------- get one article by id -------
exports.getOneArticle = (req, res, next) => { // récupérer un article avec son ID
    Article.findByPk(req.params.id) //findPK : methode sequelize // l'id est dans l'URL de la requete (req.params)
      .then(article => { // si on trouve l'article recherché
        
      if(article === null) { // si il est Null ?
          const message = `L article demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        //sinon, on a bien un article à renvoyer
        const message = 'Un article a bien été trouvé.'
        res.status(200).json({ message, data: article}) //status 200, object article renvoyé en Json
      })
      .catch(error => {
        const message = `L article n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------


  // requete un article avec jointure pour lier la grille tarifaire associée
exports.getOneArticleTarif = (req, res, next) => {
    Article.findAll({ //findAll : methode sequelize pour récupérer toute la table...
        where: {
          id_article: parseInt(req.params.id) //...mais on ajoute une condition sur l'id (comme findPK finalement)
        },
        include: Tarif //include nous permet de gérer la jointure des tables pour récupérer les tarifs...
        //...la jointure est déclarée dans /db/sequelize.js
      })
      .then(article => { // on récupère un article correspondant (avec les tarifs en sous objets)
        if(article === null) { //article null?
          const message = `L article demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        //on a un objet Json à renvoyer (avec tarifs intégrées)
        const message = 'Un article a bien été trouvé.'
        res.status(200).json({ message, data: article})
      })
      .catch(error => {
        const message = `L article n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  }; // end of ------

// --------- Récupérer tous les articles de loc (vtc, vtt...), mais pas les accessoires (cadenas,casques...) -------
exports.getAllArticle = (req, res, next) => {
  Article.findAll({ // findAll : methode sequelize pour récupérer toute la table...
    where: {
      accessoire: false //...à condition que ce ne soit pas un accessoire (cadenas, casque...)
    },
    include: Tarif  //on joint la table tarif (jointure déclarée dans /db/sequelize.js)
  })
  .then( 
      (articles) => {
        res.status(200).json(articles); //return an array of JSON objects
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

// --------- Récupérer tous les accessoires (cadenas,casques...)
exports.getAllAccessory = (req, res, next) => {
    Article.findAll({ //toute la table articles...
        where: {
            accessoire:true //...mais seulement les accessoires
        },
      })
      .then( 
          (articles) => {
            res.status(200).json(articles); //return an array of JSON objects
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


// --------- create Articles (vtc, vtt, VAE ...et accessoires) controller -------
exports.createArticle = (req, res, next) => {
  // console.log(req.body)
  Article.create(req.body ) //create : method sequelize
         .then(article => { //la promesse nous renvoie l'objet article créé
           const message = `Le nouvel article a bien été crée.`
           res.status(201).json({ message, data: article }) //on renvoie avec code 201
         })
         .catch(error => {
           const message = `L article n'a pas pu être ajouté. Réessayez dans quelques instants.`
           res.status(500).json({ message, data: error })
         })

}; // end of -----------


// --- UTILS ROUTES ---

/* 
// --------- get Route pour remplir la table articles -------
exports.initArticleTable = (req, res, next) => {
    let count = 0;
    let problem =false;

    allArticles.map((article)=>{
        Article.create(
            {
            type : article.type===""?" - ":article.type,
            taille: article.taille===""?" - ":article.taille,
            description: article.description===""?" - ":article.description,
            infos: article.infos===""?" - ":article.infos,
            image_url:"https://test.com",
            caution:parseInt(article.caution),
            accessoire:parseInt(article.accessoire)===0?false:true,
            tarif_id:parseInt(article.tarif_id),
            stock:parseInt(article.stock)
            }
            )
               .then(count++)
               .catch(problem=true)

    })
    
    if(!problem){
        const message = `La table a bien été remplie, ${count} articles ajoutés.`
         res.status(201).json({ message})
    }
    else{
        const message = `problème d'insertion dans la table article.`
        res.status(500).json({ message})

    }
 
 }; // end of ----------- */


/*  //route pour vider la table articles
exports.deleteTableArticle = (req, res, next) => {
  Article.drop()
  .then(
        res.status(201).json({ message:"table effacee"})
  )
  .catch(
    res.status(502).json({ message:"erreur de suppression de la table"})
  )
   

}; // end of ----------- */
