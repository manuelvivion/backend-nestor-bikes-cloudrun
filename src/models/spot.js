
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Spot', {
      id_spot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom_spot: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "Le nom du spot de doit pas être vide."},
          notNull: { msg: "Le nom du spot est une propriété requise."}
        }
      },
      adresse_spot: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "Le adresse du spot de doit pas être vide."},
          notNull: { msg: "Le adresse du spot est une propriété requise."}
        }
      },
      cp_spot: { // code postal / zip code
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "Le cp du spot de doit pas être vide."},
          notNull: { msg: "Le cp du spot est une propriété requise."}
        }
      },
      ville_spot: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "Le ville du spot de doit pas être vide."},
          notNull: { msg: "Le ville du spot est une propriété requise."}
        }
      },
      gps_lat: { //coordonnées lattitude (nombre flottant) du spot (pour la carte google map)
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat : { msg: "Lattitude doit être un flottant."},
          notNull: { msg: "Lattitude est propriété requise."}
        }
      },
      gps_long: { //coordonnées longitude (nombre flottant)du spot (pour la carte google map)
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat : { msg: "Longitude doit être un flottant."},
          notNull: { msg: "Longitude est propriété requise."}
        }
      },
      capacite: { //combien de vélos peut on stocker dans cet endroit
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    }, {
      timestamps: false,
      createdAt: 'created',
      updatedAt: false
    })
  }