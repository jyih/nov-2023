"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsTo(models.Album, {
        foreignKey: "albumID",
      });

      Track.belongsToMany(models.Playlist, {
        through: models.PlaylistTrack,
        foreignKey: "trackID",
        otherKey: "playlistID",
      });
    }
  }
  Track.init(
    {
      albumID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Track",
    }
  );
  return Track;
};
