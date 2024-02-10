// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empresax', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: true, // Desative o log SQL no console se preferir ele ativado apresenta as consultas sql
});

module.exports = sequelize;

  