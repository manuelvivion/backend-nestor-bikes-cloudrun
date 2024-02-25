
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Paiement', {
      id_paiement:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contrat_id: { 
        type: DataTypes.INTEGER,
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