"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlaylistTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaylistTrack.init(
    {
      playlistID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trackID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      playlistOrder: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "PlaylistTrack",
    }
  );
  return PlaylistTrack;
};
