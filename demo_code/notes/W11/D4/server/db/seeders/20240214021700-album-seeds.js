"use strict";
const { Album } = require("../models");

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
    Album.bulkCreate([
      {
        artistId: 1,
        name: "Aenima",
      },
      {
        artistId: 1,
        name: "Opiate",
      },
      {
        artistId: 1,
        name: "Undertow",
      },
      {
        artistId: 1,
        name: "Lateralus",
      },
      {
        artistId: 1,
        name: "10,000 Days",
      },
      {
        artistId: 2,
        name: "Pork Soda",
      },
      {
        artistId: 2,
        name: "Frizzle Fry",
      },
      {
        artistId: 2,
        name: "Sailing The Seas Of Cheese",
      },
      {
        artistId: 2,
        name: "The Brown Album",
      },
      {
        artistId: 3,
        name: "Everybody Into Position",
      },
      {
        artistId: 4,
        name: "Images and Words",
      },
      {
        artistId: 4,
        name: "Awake",
      },
      {
        artistId: 5,
        name: "2112",
      },
      {
        artistId: 5,
        name: "Moving Pictures",
      },
      {
        artistId: 6,
        name: "Notorious",
      },
      {
        artistId: 6,
        name: "Ready to Die",
      },
      {
        artistId: 7,
        name: "The Low End Theory",
      },
      {
        artistId: 7,
        name: "People's Instinctive Travels and the Paths of Rhythm",
      },
      {
        artistId: 8,
        name: "All Eyez on Me",
      },
      {
        artistId: 8,
        name: "Me Against the World",
      },
      {
        artistId: 9,
        name: "The Marshall Mathers LP",
      },
      {
        artistId: 9,
        name: "The Slim Shady LP",
      },
      {
        artistId: 10,
        name: "Both Sides of the Brain",
      },
      {
        artistId: 10,
        name: "No Need For Alarm",
      },
      {
        artistId: 11,
        name: "IV",
      },
      {
        artistId: 11,
        name: "Houses of the Holy",
      },
      {
        artistId: 12,
        name: "Highway to Hell",
      },
      {
        artistId: 12,
        name: "Back in Black",
      },
      {
        artistId: 13,
        name: "Toulouse Street",
      },
      {
        artistId: 13,
        name: "The Captain and Me",
      },
      {
        artistId: 14,
        name: "Pronounced Lĕh-nérd Skin-nérd",
      },
      {
        artistId: 15,
        name: "Four Tops",
      },
      {
        artistId: 16,
        name: "The Temptations Sing Smokey",
      },
      {
        artistId: 17,
        name: "Just As I Am",
      },
      {
        artistId: 18,
        name: "The Dock of the Bay",
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
    await queryInterface.bulkDelete("Albums", null, {});
  },
};
