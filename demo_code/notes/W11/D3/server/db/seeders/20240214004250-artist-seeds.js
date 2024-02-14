"use strict";

const { Artist } = require("../models");

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
    await Artist.bulkCreate([
      {
        name: "Tool",
        genre: "Progressive Rock",
      },
      {
        name: "Primus",
        genre: "Progressive Rock",
      },
      {
        name: "Oceansize",
        genre: "Progressive Rock",
      },
      {
        name: "Dream Theater",
        genre: "Progressive Rock",
      },
      {
        name: "Rush",
        genre: "Progressive Rock",
      },
      {
        name: "Notorious B.I.G.",
        genre: "Hip Hop",
      },
      {
        name: "A Tribe Called Quest",
        genre: "Hip Hop",
      },
      {
        name: "Tupac Shakur",
        genre: "Hip Hop",
      },
      {
        name: "Eminem",
        genre: "Hip Hop",
      },
      {
        name: "Del The Funky Homosapien",
        genre: "Hip Hop",
      },
      {
        name: "Led Zeppelin",
        genre: "Classic Rock",
      },
      {
        name: "AC/DC",
        genre: "Classic Rock",
      },
      {
        name: "The Doobie Brothers",
        genre: "Classic Rock",
      },
      {
        name: "Lynyrd Skynyrd",
        genre: "Classic Rock",
      },
      {
        name: "The Four Tops",
        genre: "R&B",
      },
      {
        name: "The Temptations",
        genre: "R&B",
      },
      {
        name: "Bill Withers",
        genre: "R&B",
      },
      {
        name: "Otis Redding",
        genre: "R&B",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Artists", null, {});
  },
};
