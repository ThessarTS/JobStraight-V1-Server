'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.Job, { foreignKey: 'companyId' })
    }
  }
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Company Name required' },
        notEmpty: { msg: 'Company Name required' }
      }
    },
    companyLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Company Logo required' },
        notEmpty: { msg: 'Company Logo required' }
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Location required' },
        notEmpty: { msg: 'Location required' }
      }
    },
    email: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Description required' },
        notEmpty: { msg: 'Description required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};