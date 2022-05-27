'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.Order, {through: models.BooksOrders});
      Book.belongsToMany(models.Genre, {through: models.BooksGenres});
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce nombre del producto",
        },
      },
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce precio del producto",
        },
      },
    },
    Image: {
      type: DataTypes.STRING,
    }    
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};