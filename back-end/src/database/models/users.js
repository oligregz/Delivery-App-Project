module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'users',
    });

   users.associate = (models) => {
        models.users.hasMany(models.sales,
            { foreignKey: 'userId', as: 'user' });
        models.users.hasMany(models.sales,
            { foreignKey: 'sellerId', as: 'seller' });
    };

    return users;
};

