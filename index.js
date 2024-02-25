

const sequelize = require('./src/db/sequelize') //import every settings for sequelize
sequelize.initDb() //init the sequelize/SQLite DB

//recuperer toutes les routes
const jourHoraireRoutes = require('./src/routes/jour-horaire');
const horaireRoutes = require('./src/routes/horaire');
const articleRoutes = require('./src/routes/article');
const tarifRoutes = require('./src/routes/tarif');
const contratRoutes = require('./src/routes/contrat');
const contratArticleRoutes = require('./src/routes/contrat-article');
const contratAccessRoutes = require('./src/routes/contrat-access');
const spotRoutes = require('./src/routes/spot');
const clientRoutes = require('./src/routes/client');
const paiementRoutes = require('./src/routes/paiement');

// Declare and configure express ----
const express = require('express');
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT) || 8080;

const app = express();
app.use(express.json()); // make to app able to read directly req objects as JSON

//middleware to manage charset from axepta
app.use((req, res, next) => { 
  console.log(req.headers["content-type"]);
  if(req.headers['content-type'] === 'application/x-www-form-urlencoded;charset=iso-8859-1'){
    req.headers['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  }
  next();
});
 
//app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//CORS Management by adding headers to Req. ---
app.use((req, res, next) => { 
   
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });


 
//liste des routes du server
app.use('/jour-horaire', jourHoraireRoutes); 
app.use('/horaires', horaireRoutes); 
app.use('/article', articleRoutes); 
app.use('/tarif', tarifRoutes); 
app.use('/contrat', contratRoutes); 
app.use('/contrat-article', contratArticleRoutes); 
app.use('/contrat-access', contratAccessRoutes); 
app.use('/spot', spotRoutes); 
app.use('/client', clientRoutes); 
app.use('/paiement', paiementRoutes); 



app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))