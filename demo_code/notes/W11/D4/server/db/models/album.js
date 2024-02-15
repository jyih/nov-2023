"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, {
        foreignKey: "artistId",
      });

      Album.hasMany(models.Track, {
        foreignKey: "albumID",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Album.init(
    {
      artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
        releaseDate: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_DATE"),
        },
      },
    },
    {
      sequelize,
      modelName: "Album",
    }
  );
  return Album;
};
