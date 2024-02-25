
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Contrat', {
      id_contrat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ref_contrat: { // référence du contrat , créée côté frontend
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La ref contrat est une propriété requise."}
        }
      },
      client_id: { // id du client qui a soucrit ce contrat
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "L'ID du client doit être supérieurs ou égales à 0."
            },
          
          notNull: { msg: "L'ID client est une propriété requise."}
        }
      }, 
      spot_id: { // id du spot ou a lieu la loc
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "L'ID du spot doit être supérieurs ou égales à 0."
            },
          
          notNull: { msg: "L'ID du spot est une propriété requise."}
        }
      },
      date1: { // date de début
        type: DataTypes.DATEONLY,
        set(value){
            this.setDataValue('date1',new Date(value).toISOString().slice(0, 10))
        },
        allowNull: false,
        validate: {
          notNull: { msg: "La date de début est une propriété requise."}
        }
      },
      date2: { // date de fin
        type: DataTypes.DATEONLY,
        set(value){
            this.setDataValue('date2',new Date(value).toISOString().slice(0, 10))
        },
        allowNull: false,
        validate: {
          notNull: { msg: "La date de fin est une propriété requise."}
        }
      },
      h1: { // horaire de début
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "L'heure de début doit être supérieurs ou égales à 0."
            },
          notNull: { msg: "L'heure début est une propriété requise."}
        }
      },
      h2: { //horaire de fin
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "L'heure de fin doit être supérieurs ou égales à 0."
            },
          notNull: { msg: "L'heure fin est une propriété requise."}
        }
      },
      total: { // prix total de la location
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "Le total doit être supérieurs ou égales à 0."
            },
          notNull: { msg: "Le prix total est une propriété requise."}
        }
      },
      solde: { // solde restant à régler
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "Le solde doit être supérieurs ou égales à 0."
            },
          notNull: { msg: "Le solde est une propriété requise."}
        }
      },
      commentaire: { //commentaire laissé par le client lors de la réservation
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le commentaire est une propriété requise."}
        }
      },
      commentaire2: { // commentaire ajouté par le loueur
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le commentaire est une propriété requise."}
        }
      },
      date_crea: { // date de création du contrat
        type: DataTypes.DATEONLY,
        set(value){
            this.setDataValue('date_crea',new Date(value).toISOString().slice(0, 10))
        },
        allowNull: false,
        validate: {
          notNull: { msg: "La date de creation est une propriété requise."}
        }
      },
      resa: { // booléen : réservation (true) ou contrat sur place
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "Le boolean resa est une propriété requise."}
        }
      },
    
      paye: { // entier pour définir le type de paiement
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le type de paiement doit être supérieurs ou égales à 0."
            },
            notNull: { msg: "Le type de paiement est une propriété requise."}
        }
     },
      retour: { // booléen pour définir si tous les articles et accessoires ont été rendus
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "Le boolean retour est une propriété requise."}
        }
      },
      livraison: { // booléen pour spécifié si une livraison à domicile est requise...
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "Le boolean livraison est une propriété requise."}
        }
      },
      adresse_livraison: { // ... le cas échéant : l'adresse de la livraison
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La garantie est une propriété requise."}
        }
      },
      garantie: { // infos concernant le dépot de garantie
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La garantie est une propriété requise."}
        }
      }
    }, {
      timestamps: true, // date de création ajoutée
      createdAt: 'created',
      updatedAt: true // date de modif ajoutée
    })
  }