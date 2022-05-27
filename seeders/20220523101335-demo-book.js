'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Quijote',
        price: "25€",
        // GenreId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Alien',
        price: "15€",
        // GenreId: [2, 4],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'La Carretera',
        price: "17€",
        // GenreId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Austin Power',
        price: "25€",
        // GenreId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
