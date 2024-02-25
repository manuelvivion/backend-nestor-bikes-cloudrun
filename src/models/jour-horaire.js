
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('JourHoraire', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    horaire_id: { // id du type d'horaire
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
            args: [0],
            msg: "L'ID de l'horaire doit être supérieurs ou égales à 0."
          },
        
        notNull: { msg: "L'ID horaire est une propriété requise."}
      }
    },
    spot_id: { // id du spot concerner par l'horaire
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "L'ID dsu spot doit être supérieurs ou égales à 0."
            },
          
          notNull: { msg: "L'ID spot est une propriété requise."}
        }
      },
    jour: { //numéro du jour dans l'année où va s'appliquer cet horaire
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
              args: [0],
              msg: "Le numéro du jour doit être supérieurs ou égales à 0."
            },
          
          notNull: { msg: "Le numéro du jour est une propriété requise."}
        }
      },
  }, {
    timestamps: false,
    createdAt: 'created',
    updatedAt: false
  })
}