const knex = require('knex');
const config = require('./knexfile'); // importa o knexfile.js

// Escolhe o ambiente (development, production, etc.)
const db = knex(config.development);

// Exporta a instância do Knex pronta pra usar
module.exports = db;
