module.exports = function(sequelize, DataTypes) {
  const Pokemon = sequelize.define("Pokemon", {
    sprite: DataTypes.STRING,
    name: DataTypes.STRING,
    typeOne: DataTypes.STRING,
    typeTwo: DataTypes.STRING,
    level: DataTypes.INTEGER.UNSIGNED
  });
  return Pokemon;
};
