
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Client', {
      id_client:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      prenom: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le prenom est une propriété requise."}
        }
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le nom est une propriété requise."}
        }
      },
      email: { //email !!! unique 
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'cet email est déjà utilisé.'
          },
        validate: {
          isEmail : { msg: "ce n'est pas un format email valide."},
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le mail est une propriété requise."}
        }
      },
      tel: { //telephone format interntl !!! unique
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'ce numero de tel est déjà utilisé.'
          },
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "Le tel est une propriété requise."}
        }
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "adresse est une propriété requise."}
        }
      },
      adresse_comp: { //complément d'adresse : facultatif
        type: DataTypes.STRING,
        allowNull: true,
      },
      cp: { //code postal, zip code
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "cp est une propriété requise."}
        }
      },
      ville: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "ville est une propriété requise."}
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty : { msg: "La chaine de doit pas être vide."},
          notNull: { msg: "country est une propriété requise."}
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true
    })
  }