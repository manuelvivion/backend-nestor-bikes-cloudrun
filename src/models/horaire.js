
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Horaire', {
      id_horaire: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      am_start: { // ouverture le matin
        type: DataTypes.FLOAT, //au cas où on veut gérer les demis heures
        allowNull: false,
      } ,
      am_end: { //fermeture au déjeuner
        type: DataTypes.FLOAT, //au cas où on veut gérer les demis heures
        allowNull: false
      },
      pm_start: { //ouverture au dejeuner 
        type: DataTypes.FLOAT, //au cas où on veut gérer les demis heures
        allowNull: false
      },
      pm_end: { // fermeture le soir
        type: DataTypes.FLOAT, //au cas où on veut gérer les demis heures
        allowNull: false
      },
      ferme: { //booléen pour spécifier si c'est un jour de fermeture complète
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      reservation: { // réservations possible à cet date?
        type: DataTypes.BOOLEAN,
        allowNull: false
      } 
    }, {
      timestamps: false,
      createdAt: 'created',
      updatedAt: false
    })
  }