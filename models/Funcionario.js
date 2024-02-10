// models/Funcionario.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Funcionario;
