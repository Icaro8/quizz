const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pergunta = require('../models/Pergunta');
const Alternativa = require('../models/Alternativa');
const Resposta = require('../models/Resposta');

const connection = new Sequelize(dbConfig);

User.init(connection);
Pergunta.init(connection);
Alternativa.init(connection);
Resposta.init(connection);

Pergunta.associate(connection.models);
Alternativa.associate(connection.models);
Resposta.associate(connection.models);


module.exports = connection;
