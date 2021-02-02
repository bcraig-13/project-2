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

//   module.exports = function(sequelize, DataTypes) {
//     const Todo = sequelize.define("Todo", {
//       text: DataTypes.STRING,
//       complete: DataTypes.BOOLEAN
//     });
//     return Todo;
//   };
