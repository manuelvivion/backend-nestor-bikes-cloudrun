
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Article', {
      id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: { // description de l'article (intitulé, type de vélo, accessoire...)
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le type est une propriété requise."}
        }
      },
      taille: { // taille de l'article // ATTN : la mention "unique" décide si les cyclistes doivent donner taille/prénom
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La taille est une propriété requise."}
        }
      },
      description: { //text de description
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "La description est une propriété requise."}
        }
      },
      infos: { // infos supplémentaires
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Les infos est une propriété requise."}
        }
      },
      image_url: { // url de l'image à afficher
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl:{msg:"l'url de l'image n'est pas au bon format"},
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Les infos est une propriété requise."}
        }
      },
      caution: { //montant (entier) de la valeur de caution demandée pour cet article
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le numéro du jour doit être supérieurs ou égales à 0."
              },
          isInt : { msg: "Le montant de la caution doit être un entier."},
          notNull: { msg: "La caution est une propriété requise."}
        }
      },
      accessoire: { // booléen pour définir si l'article est un accessoire ou non (ex: panier, casque, antivol)
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "le boolean accessoire est une propriété requise."}
        }
      },
      tarif_id: { // id de la grille tarifaire associée à cet article
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [1],
                msg: "L'id tarif doit être supérieur à 0."
              },
          notNull: { msg: "Le tarif est une propriété requise."}
        }
      },
      stock: { // quantitée globale de cet article dispo à la location
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Le stock doit être supérieur ou égal à 0."
              },
          notNull: { msg: "Le tarif est une propriété requise."}
        }
      }
    }, {
      timestamps: false,
      createdAt: 'created',
      updatedAt: false
    })
  }