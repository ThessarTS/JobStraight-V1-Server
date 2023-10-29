'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsTo(models.Job, { foreignKey: 'jobId' })
    }
  }
  Skill.init({
    jobId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Skill Name required' },
        notEmpty: { msg: 'Skill Name required' }
      }
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Level required' },
        notEmpty: { msg: 'Level required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};