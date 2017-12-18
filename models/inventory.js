module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        product_code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        vendor: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                notEmpty: false
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        SF_Box: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10],
                notEmpty: true
            }
        },
        dimension: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500],
                notEmpty: true
            }
        },
        collection: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                notEmpty: false
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
        wh2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        wh3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        }
    });

    Inventory.associate = function(models) {
        Inventory.hasMany(models.History, {
            onDelete: "cascade"
        });
    }
    return Inventory;
};