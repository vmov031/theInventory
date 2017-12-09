module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define("History", {
     product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
      quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
      }
    },
      month: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
      }
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
      }
    }
  });
  return History;
};