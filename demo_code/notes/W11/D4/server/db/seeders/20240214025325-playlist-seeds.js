"use strict";

const { Playlist } = require("../models");

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
    Playlist.bulkCreate([
      {
        userID: 1,
        name: "Chillin'",
      },
      {
        userID: 1,
        name: "Groovin'",
      },
      {
        userID: 1,
        name: "Rockin'",
      },
      {
        userID: 2,
        name: "Highway Music",
      },
      {
        userID: 2,
        name: "Feelin' Weird",
      },
      {
        userID: 3,
        name: "Road Tunes",
      },
      {
        userID: 4,
        name: "Oldies",
      },
      {
        userID: 5,
        name: "Skynyrd 4-Eva",
      },
      {
        userID: 6,
        name: "Old School",
      },
      {
        userID: 7,
        name: "Barb's Playlist",
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
    await queryInterface.bulkDelete("Playlists", null, {});
  },
};
