"use strict";

const { PlaylistTrack } = require("../models");

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
    PlaylistTrack.bulkCreate([
      {
        playlistID: 1,
        trackID: 16,
        playlistOrder: 1,
      },
      {
        playlistID: 1,
        trackID: 17,
        playlistOrder: 2,
      },
      {
        playlistID: 1,
        trackID: 18,
        playlistOrder: 3,
      },
      {
        playlistID: 2,
        trackID: 18,
        playlistOrder: 1,
      },
      {
        playlistID: 2,
        trackID: 59,
        playlistOrder: 2,
      },
      {
        playlistID: 2,
        trackID: 50,
        playlistOrder: 3,
      },
      {
        playlistID: 2,
        trackID: 24,
        playlistOrder: 4,
      },
      {
        playlistID: 2,
        trackID: 15,
        playlistOrder: 5,
      },
      {
        playlistID: 3,
        trackID: 1,
        playlistOrder: 1,
      },
      {
        playlistID: 3,
        trackID: 2,
        playlistOrder: 2,
      },
      {
        playlistID: 3,
        trackID: 3,
        playlistOrder: 3,
      },
      {
        playlistID: 3,
        trackID: 4,
        playlistOrder: 4,
      },
      {
        playlistID: 3,
        trackID: 5,
        playlistOrder: 5,
      },
      {
        playlistID: 3,
        trackID: 6,
        playlistOrder: 6,
      },
      {
        playlistID: 4,
        trackID: 43,
        playlistOrder: 1,
      },
      {
        playlistID: 4,
        trackID: 46,
        playlistOrder: 2,
      },
      {
        playlistID: 4,
        trackID: 44,
        playlistOrder: 3,
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
  },
};
