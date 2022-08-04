'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales',
    [{
      id: 1,
      user_id: 3,
      seller_id: 2,
      total_price: 11.90,
      delivery_address: 'street a num 123',  
      delivery_number: '123',
    },
    ], { timestamps: false });
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
