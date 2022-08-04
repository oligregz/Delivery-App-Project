'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salesProducts',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 2,   
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 1,   
      },
    ],
    { timestamps: false });
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