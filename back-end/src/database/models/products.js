module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(9, 2),
      urlImage: DataTypes.STRING,
    }, {
      underscored: true,
      timestamps: false,
      tableName: 'products',
    });
    return products;
  };