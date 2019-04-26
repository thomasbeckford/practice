'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
Product.associate = function(models) {    
    Product.belongsTo(models.Category);  
};
  return Product;
};