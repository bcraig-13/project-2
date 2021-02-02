// Creating our Pokemon model
module.exports = function(sequelize, DataTypes) {
  const Pokemon = sequelize.define("Pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Pokemon.associate = function (models) {
    Pokemon.belongsTo(models.User);
  };
  return Pokemon;
};
