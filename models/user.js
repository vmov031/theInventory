module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [12]
            }
        },
        mob_no: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [500]
            }
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [500]
            }
        },

    });

    return User;

};