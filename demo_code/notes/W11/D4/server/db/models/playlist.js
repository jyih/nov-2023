"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo(models.User, {
        foreignKey: "userID",
      });

      Playlist.belongsToMany(models.Track, {
        through: models.PlaylistTrack,
        foreignKey: "playlistID",
        otherKey: "trackID",
      });
    }
  }
  Playlist.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
    },
    {
      sequelize,
      modelName: "Playlist",
    }
  );
  return Playlist;
};
