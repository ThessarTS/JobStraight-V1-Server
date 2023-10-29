'use strict';

const { hashPass } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        username: 'Thessar',
        email: 'tsrts@mail.com',
        password: hashPass('123123'),
        role: 'Super Admin',
        phoneNumber: '62888888881',
        address: 'this is an address',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Nika',
        email: 'nika@mail.com',
        password: hashPass('123123'),
        role: 'Super Admin',
        phoneNumber: '62888888881',
        address: 'this is an address',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
