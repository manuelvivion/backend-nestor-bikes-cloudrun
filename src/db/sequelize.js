const { Sequelize, DataTypes } = require('sequelize')

// Import models created in /models Dir. -----
const JourHoraireModel = require('../models/jour-horaire')
const HoraireModel = require('../models/horaire')
const ArticleModel = require('../models/article')
const TarifModel = require('../models/tarif')
const ContratModel = require('../models/contrat')
const ContratArticleModel = require('../models/contrat-article')
const ContratAccessModel = require('../models/contrat-access')
const SpotModel = require('../models/spot')
const ClientModel = require('../models/client')
const PaiementModel = require('../models/paiement')
// -----

let sequelize;
sequelize = new Sequelize('nestorbike', 'root', '', {
    host: 'localhost',
    dialect: 'sqlite',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false,
    storage: "./database.sqlite"
})

//Declare models to be exported ----
const JourHoraire = JourHoraireModel(sequelize, DataTypes)
const Horaire = HoraireModel(sequelize, DataTypes)
const Article = ArticleModel(sequelize, DataTypes)
const Tarif = TarifModel(sequelize, DataTypes)
const Contrat = ContratModel(sequelize, DataTypes)
const ContratArticle = ContratArticleModel(sequelize, DataTypes)
const ContratAccess = ContratAccessModel(sequelize, DataTypes)
const Spot = SpotModel(sequelize, DataTypes)
const Client = ClientModel(sequelize, DataTypes)
const Paiement = PaiementModel(sequelize, DataTypes)
// ----

// Relationships between tables (to joined requests)
// --- horaire JOIN jourHOraire
Horaire.hasMany(JourHoraire,{ 
  foreignKey : 'horaire_id',
} );
JourHoraire.belongsTo(Horaire,{ 
  foreignKey : 'horaire_id',
});
// ------ tarif JOIN article
Tarif.hasMany(Article,{ 
  foreignKey : 'tarif_id',
} );
Article.belongsTo(Tarif,{ 
  foreignKey : 'tarif_id',
});
// ------ Contrat JOIN articles (through contrat-article table)
Contrat.hasMany(ContratArticle,{ 
  foreignKey : 'contrat_id',
} );
ContratArticle.belongsTo(Contrat,{ 
  foreignKey : 'contrat_id',
});
// ------ Contrat JOIN articles (through contrat-article table)
Article.hasMany(ContratArticle,{ 
  foreignKey : 'article_id',
} );
ContratArticle.belongsTo(Article,{ 
  foreignKey : 'article_id',
}); 
// ------ Contrat JOIN accessories (through contrat-access table)
Contrat.hasMany(ContratAccess,{ 
  foreignKey : 'contrat_id',
} );
ContratAccess.belongsTo(Contrat,{ 
  foreignKey : 'contrat_id',
});
// ------
// ------ Contrat JOIN spot
Spot.hasMany(Contrat,{ 
  foreignKey : 'spot_id',
} );
Contrat.belongsTo(Spot,{ 
  foreignKey : 'spot_id',
});
// ------ Contrat JOIN client
Client.hasMany(Contrat,{ 
  foreignKey : 'client_id',
} );
Contrat.belongsTo(Client,{ 
  foreignKey : 'client_id',
});
// ------


// Init SQLite database
const initDb = () => { // init function called in index.js
  return sequelize.sync().then(_ => { // Sequelize sync all the models with actual sqlite db file
    console.log('La base de donnée a bien été initialisée !')
  })
}




// Export the initDB function and every Sequelize Models (to use them in all controllers)
module.exports = { 
  initDb, JourHoraire, Horaire, Article, Tarif, Contrat, ContratArticle, ContratAccess, Spot, Client, Paiement //list of models to export
}