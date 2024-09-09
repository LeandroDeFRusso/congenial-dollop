const Sequelize = require('sequelize')
const config = require('../config/database')

const Pessoa = require('../models/Pessoa')

const connection = new Sequelize(config)

module.exports = connection;
