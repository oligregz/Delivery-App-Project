module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'sales',
  });

  sales.associate = (models) => {
    models.sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' });
    models.sales.belongsTo(models.users,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return sales;
  };