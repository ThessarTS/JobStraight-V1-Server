'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let companies = require('../companies.json')
    companies.forEach(company => company.createdAt = company.updatedAt = new Date())

    await queryInterface.bulkInsert('Companies', companies)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
