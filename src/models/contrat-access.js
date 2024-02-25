module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ContratAccess', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      article_id: { // id de l'article(accessoire) lié au contrat
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'Utilisez uniquement des nombres entiers pour article_id.' },
          min: {
            args: [0],
            msg: 'article_id doivent être supérieurs ou égales à 0.'
          },
          notNull: { msg: 'article_id une propriété requise.'}
        }
      },
      contrat_id: { // id du contrat qui contien cet accessoire
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt: { msg: 'Utilisez uniquement des nombres entiers pour contrat_id.' },
            min: {
              args: [0],
              msg: 'contrat_id doivent être supérieurs ou égales à 0.'
            },
            notNull: { msg: 'contrat_id une propriété requise.'}
          }
        },
      qte: { //la quantité de l'accessoire pour le contrat
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'Utilisez uniquement des nombres entiers pour la qté articles.' },
          min: {
            args: [0],
            msg: 'La qté doivent être supérieurs ou égales à 0.'
          },
          notNull: { msg: 'La qté est une propriété requise.'}
        }
      },
      rendu: { // quantité de cet accessoire rendu
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'Utilisez uniquement des nombres entiers pour la qté rendu.' },
          min: {
            args: [0],
            msg: 'La qté doivent être supérieurs ou égales à 0.'
          },
          notNull: { msg: 'La qté rendu est une propriété requise.'}
        }
      }
  
    }, {
      timestamps: true, // date de création ajoutée
      createdAt: 'created',
      updatedAt: false
    })
  }