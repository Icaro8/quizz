const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const PerguntaController = require('./controllers/PerguntaController');

const authMiddleware = require('./middlewares/authenticate');

const Routes = express.Router();

Routes.get('/teste', (req, res) => {
  console.log('chegou aqui');
});

Routes.post('/users', UserController.store);
Routes.post('/users/authenticate', AuthController.authenticate);

Routes.use(authMiddleware);

//user
Routes.get('/listUsers', UserController.listUsers);
Routes.put('/users', UserController.update);
Routes.delete('/users', UserController.delete);
Routes.get('/user', UserController.getUser);
Routes.get('/user/isadmin', UserController.isAdmin);

//Perguntas
Routes.get('/users/perguntas', PerguntaController.index);
Routes.get('/users/perguntas-all', PerguntaController.indexAll);
Routes.post('/users/pergunta', PerguntaController.store);
Routes.get('/users/pergunta/:pergunta', PerguntaController.getOne);
Routes.get('/users/pergunta-random', PerguntaController.findRandom)

module.exports = Routes;
