module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ContratArticle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: { // id de l'article composant ce contrat
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
    contrat_id: { // id du contrat incluant cet article
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
    qte: { // quantité de cet article dans ce contrat
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
    taille: { // taille des cyclistes (utile seulement si taille d'article n'est pas "unique")
      type: DataTypes.STRING, // tableau => profondeur = Qté 
      allowNull: true,
      get() {
        return this.getDataValue('taille').split(',') //on transforme le tableau en chaine quand on le recoit (POST)
      },
      set(types) {
        this.setDataValue('taille', types.join()) //on transforme la STRING en tableau quand on le renvoie (GET)
      },
      validate: {
        isTypesValid(value) {
          if(value.split(',').length > this.qte) {
            throw new Error('trop de taille par rapport à la quantité.')
          }
        }
      }
    },
    prenom: { // prénoms des cyclistes (utile seulement si taille d'article n'est pas "unique")
        type: DataTypes.STRING, // tableau => profondeur = Qté 
        allowNull: true,
        get() {
          return this.getDataValue('prenom').split(',') //on transforme le tableau en chaine quand on le recoit (POST)
        },
        set(types) {
          this.setDataValue('prenom', types.join()) //on transforme la STRING en tableau quand on le renvoie (GET)
        },
        validate: {
          isTypesValid(value) {
            if(value.split(',').length > this.qte) {
              throw new Error('trop de prénom par rapport à la quantité.')
            }
          }
        }
      },
    rendu: { // liste de "pseudo" booléens "0" ou "1" si article rendu ou non
        type: DataTypes.STRING, // tableau => profondeur = Qté  // l'indice correspond à l'indice du prénom correspondant
        allowNull: true,
        get() {
          return this.getDataValue('rendu').split(',') //on transforme le tableau en chaine quand on le recoit (POST)
        },
        set(types) {
          this.setDataValue('rendu', types.join()) //on transforme la STRING en tableau quand on le renvoie (GET)
        },
        validate: {
          isTypesValid(value) {
            if(value.split(',').length > this.qte) {
              throw new Error('trop de rendu par rapport à la quantité.')
            }
          }
        }
      }

  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}