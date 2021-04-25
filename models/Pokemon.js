
const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("Pokemon", {

        numero: Sequelize.STRING,
        tipo: Sequelize.STRING,
        geracao: Sequelize.STRING,
 /*    email: {
            type: Sequelize.STRING,
            validade: {
                isEmail: true
            }
        }
    */
    })
        
    return Pokemon;
}