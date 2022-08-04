module.exports = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define('salesProducts', {
      saleId: { type: DataTypes.INTEGER, primaryKey: true},
      productId: { type: DataTypes.INTEGER, primaryKey: true},
      quantity: DataTypes.INTEGER,     
    }, {
      underscored: true,
      timestamps: false,
      tableName: 'salesProducts',
    });

    salesProducts.associate = (models) => {
      models.sales.belongsToMany(models.products, {
        as: 'products',
        through: salesProducts,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
      models.products.belongsToMany(models.sales, {
        as: 'sales',
        through: salesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
    };
  
    return salesProducts;
  };