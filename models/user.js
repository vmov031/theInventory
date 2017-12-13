module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1],
        isEmail: true,
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [12]
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [500]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      } 
  });

  return User;
  
};
