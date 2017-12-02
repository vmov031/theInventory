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
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 50]
    },
    password: {
      type: DataTypes.STRING,
      len: [12]
    }
  });
  return User;
};
