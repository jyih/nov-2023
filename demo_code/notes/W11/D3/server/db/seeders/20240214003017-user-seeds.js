"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: "Steve",
        email: "steve@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Bob",
        email: "bob@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Bill",
        email: "bill@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Jim",
        email: "jim@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Pam",
        email: "pam@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Jill",
        email: "jill@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Barb",
        email: "barb@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Herb",
        email: "herb@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Ash",
        email: "ash@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Doug",
        email: "doug@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Terry",
        email: "terry@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Pat",
        email: "pat@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Jane",
        email: "jane@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Wes",
        email: "wes@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Sandy",
        email: "sandy@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Jake",
        email: "jake@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Sam",
        email: "sam@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Brad",
        email: "brad@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Kate",
        email: "kate@mail.com",
        password: "supersecretpassword!",
      },
      {
        name: "Dave",
        email: "dave@mail.com",
        password: "supersecretpassword!",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
