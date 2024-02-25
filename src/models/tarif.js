
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tarif', {
      id_tarif: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      demi: { // tarif de la demi journée
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif demi doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif demi doit être un flottant."},
          notNull: { msg: "Le tarif demi propriété requise."}
        }
      },
      jour: { //tarif de la journée (matin -> soir)
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif jour doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif jour doit être un flottant."},
          notNull: { msg: "Le tarif jour propriété requise."}
        }
      },
      vingt_quatre: { // tarif du fiorfait 24h
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif vingt_quatre doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif vingt_quatre doit être un flottant."},
          notNull: { msg: "Le tarif vingt_quatre propriété requise."}
        }
      },
      semaine: { // tarif à la semaine
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif semaine doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif semaine doit être un flottant."},
          notNull: { msg: "Le tarif semaine propriété requise."}
        }
      },
      dix_jours: { // tarif pour 10 jours
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif dix_jours doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif dix_jours doit être un flottant."},
          notNull: { msg: "Le tarif dix_jours propriété requise."}
        }
      },
      deux_semaines: { // tarif pour 2 semaines
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif deux_semaines doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif deux_semaines doit être un flottant."},
          notNull: { msg: "Le tarif deux_semaines propriété requise."}
        }
      },
      trois_semaines: { // tarif pour 3 semaines
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif trois_semaines doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif trois_semaines doit être un flottant."},
          notNull: { msg: "Le tarif trois_semaines propriété requise."}
        }
      },
      mois: { // tarif au mois
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le tarif mois doit être supérieurs ou égales à 0."
              },
          isFloat : { msg: "Le montant du tarif mois doit être un flottant."},
          notNull: { msg: "Le tarif mois propriété requise."}
        }
      },
      libelle: { // nom de la grille tarifaire (ex : vtc, fatbike...)
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le libelle est une propriété requise."}
        }
      }
    }, {
      timestamps: false,
      createdAt: 'created',
      updatedAt: false
    })
  }