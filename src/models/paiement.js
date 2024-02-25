
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Paiement', {
      id_paiement:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      PayID: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le PayID  est requis."}
        }
      },
     XID: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le XID  est requis."}
        }
      },
      contrat_id: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le contrat id est requis."}
        }
      },
      ref_contrat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La ref contrat est une propriété requise."}
        }
      },
      UserData: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le UserData  est requis."}
        }
      },
      CardHolder: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le cardholder  est requis."}
        }
      },
      Status: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le Status  est requis."}
        }
      },
      Code: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le Code  est requis."}
        }
      },
      Description: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le Description  est requis."}
        }
      },
      paye: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: { msg: "Le resultat du paiement est requis."}
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true
    })
  }