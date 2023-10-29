'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, { foreignKey: 'authorId' })
      Job.belongsTo(models.Company, { foreignKey: 'companyId' })
      Job.hasMany(models.Skill, { foreignKey: 'jobId' })
    }
  }
  Job.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Title required' },
        notEmpty: { msg: 'Title required' }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Job Description required' },
        notEmpty: { msg: 'Job Description required' }
      }
    },
    salary: DataTypes.INTEGER,
    jobType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Job Type required' },
        notEmpty: { msg: 'Job Type required' }
      }
    },
    companyId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};