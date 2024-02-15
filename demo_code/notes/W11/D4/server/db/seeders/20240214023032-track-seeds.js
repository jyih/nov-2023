"use strict";
const { Track } = require("../models");

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
    Track.bulkCreate([
      {
        albumID: 1,
        name: "Aenima",
        url: "www.google.com",
      },
      {
        albumID: 1,
        name: "Pushit",
        url: "www.google.com",
      },
      {
        albumID: 2,
        name: "Opiate",
        url: "www.google.com",
      },
      {
        albumID: 3,
        name: "Sober",
        url: "www.google.com",
      },
      {
        albumID: 4,
        name: "Schism",
        url: "www.google.com",
      },
      {
        albumID: 5,
        name: "Vicarious",
        url: "www.google.com",
      },
      {
        albumID: 6,
        name: "My Name Is Mud",
        url: "www.google.com",
      },
      {
        albumID: 7,
        name: "Too Many Puppies",
        url: "www.google.com",
      },
      {
        albumID: 7,
        name: "John The Fisherman",
        url: "www.google.com",
      },
      {
        albumID: 8,
        name: "Jerry Was A Race Car Driver",
        url: "www.google.com",
      },
      {
        albumID: 9,
        name: "Shake Hands With Beef",
        url: "www.google.com",
      },
      {
        albumID: 10,
        name: "A Homage To A Shame",
        url: "www.google.com",
      },
      {
        albumID: 11,
        name: "Pull Me Under",
        url: "www.google.com",
      },
      {
        albumID: 11,
        name: "Under A Glass Moon",
        url: "www.google.com",
      },
      {
        albumID: 12,
        name: "Caught In A Web",
        url: "www.google.com",
      },
      {
        albumID: 13,
        name: "2112 Overture",
        url: "www.google.com",
      },
      {
        albumID: 13,
        name: "II. The Temples of Syrinx",
        url: "www.google.com",
      },
      {
        albumID: 14,
        name: "Red Barchetta",
        url: "www.google.com",
      },
      {
        albumID: 14,
        name: "YYZ",
        url: "www.google.com",
      },
      {
        albumID: 14,
        name: "Tom Sawyer",
        url: "www.google.com",
      },
      {
        albumID: 14,
        name: "Limelight",
        url: "www.google.com",
      },
      {
        albumID: 15,
        name: "Hypnotize",
        url: "www.google.com",
      },
      {
        albumID: 15,
        name: "Notorious Thugs",
        url: "www.google.com",
      },
      {
        albumID: 16,
        name: "Gimme the Loot",
        url: "www.google.com",
      },
      {
        albumID: 16,
        name: "Warning",
        url: "www.google.com",
      },
      {
        albumID: 17,
        name: "Buggin' Out",
        url: "www.google.com",
      },
      {
        albumID: 17,
        name: "Butter",
        url: "www.google.com",
      },
      {
        albumID: 18,
        name: "Can I Kick It?",
        url: "www.google.com",
      },
      {
        albumID: 18,
        name: "I Left My Wallet In El Segundo",
        url: "www.google.com",
      },
      {
        albumID: 19,
        name: "How Do U Want It",
        url: "www.google.com",
      },
      {
        albumID: 19,
        name: "I Ain't Mad at Cha",
        url: "www.google.com",
      },
      {
        albumID: 19,
        name: "Picture Me Rollin'",
        url: "www.google.com",
      },
      {
        albumID: 20,
        name: "Dear Mama",
        url: "www.google.com",
      },
      {
        albumID: 20,
        name: "Outlaw",
        url: "www.google.com",
      },
      {
        albumID: 21,
        name: "Stan",
        url: "www.google.com",
      },
      {
        albumID: 21,
        name: "The Way I Am",
        url: "www.google.com",
      },
      {
        albumID: 22,
        name: "Brain Damage",
        url: "www.google.com",
      },
      {
        albumID: 22,
        name: "My Fault",
        url: "www.google.com",
      },
      {
        albumID: 23,
        name: "If You Must",
        url: "www.google.com",
      },
      {
        albumID: 24,
        name: "You're in Shambles",
        url: "www.google.com",
      },
      {
        albumID: 25,
        name: "Stairway To Heaven",
        url: "www.google.com",
      },
      {
        albumID: 26,
        name: "D'yer Mak'er",
        url: "www.google.com",
      },
      {
        albumID: 27,
        name: "Highway to Hell",
        url: "www.google.com",
      },
      {
        albumID: 28,
        name: "Back in Black",
        url: "www.google.com",
      },
      {
        albumID: 29,
        name: "Listen to the Music",
        url: "www.google.com",
      },
      {
        albumID: 29,
        name: "Rockin' Down the Highway",
        url: "www.google.com",
      },
      {
        albumID: 30,
        name: "Long Train Runnin'",
        url: "www.google.com",
      },
      {
        albumID: 30,
        name: "Evil Woman",
        url: "www.google.com",
      },
      {
        albumID: 31,
        name: "Gimme Three Steps",
        url: "www.google.com",
      },
      {
        albumID: 31,
        name: "Simple Man",
        url: "www.google.com",
      },
      {
        albumID: 31,
        name: "Free Bird",
        url: "www.google.com",
      },
      {
        albumID: 31,
        name: "Tuesday's Gone",
        url: "www.google.com",
      },
      {
        albumID: 32,
        name: "Baby I Need Your Loving",
        url: "www.google.com",
      },
      {
        albumID: 33,
        name: "My Girl",
        url: "www.google.com",
      },
      {
        albumID: 34,
        name: "Grandma's Hands",
        url: "www.google.com",
      },
      {
        albumID: 34,
        name: "Moanin' and Groanin'",
        url: "www.google.com",
      },
      {
        albumID: 35,
        name: "Let Me Come On Home",
        url: "www.google.com",
      },
      {
        albumID: 35,
        name: "Ole Man Trouble",
        url: "www.google.com",
      },
      {
        albumID: 35,
        name: "(Sittin' On) The Dock of the Bay",
        url: "www.google.com",
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
    await queryInterface.bulkDelete("Tracks", null, {});
  },
};
