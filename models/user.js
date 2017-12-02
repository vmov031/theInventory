module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1, 50]
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [12],
        notEmpty: true
      }
    }
  });
  return User;
};
