modules.exports = function(sequelize, ???) {
    const Pokemon = sequelize.define("Pokemon", {
        //id?
        //sprite: sprite url?
        name: ???.STRING,
        typeOne: ???.STRING,
        typeTwo: ???.STRING,
        level: ???.INTEGER
    })
    return Pokemon;
};
//Not sure if this is the right way to start it