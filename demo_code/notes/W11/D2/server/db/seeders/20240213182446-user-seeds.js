"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(

    //   "Users",
    //   [
    //     {
    //       name: "John Doe",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: "Shane Wilkey",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
    await User.bulkCreate(
      [
        {
          name: "John Doe",
        },
        {
          name: "Shane Wilkey",
        },
        {
          name: "Jane Doe",
        },
        {
          name: "Oliver Wilkey",
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
