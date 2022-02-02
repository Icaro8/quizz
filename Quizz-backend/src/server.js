const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const Routes = require('./routes');

app.use(express.json());
app.use(cors());

require('./database'); //Carregar DB

app.use(Routes);

const port = 3333;
server.listen(port, () => console.log(`Server rodando na porta ${port}`));
