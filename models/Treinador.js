
        const sequelize = require("sequelize");

        module.exports = (sequelize, Sequelize) => {
            const Treinador = sequelize.define("Treinador", {
                nome: Sequelize.STRING,
        idade: Sequelize.STRING,
        level: Sequelize.STRING,
            
            })
        return Treinador;
    
   
