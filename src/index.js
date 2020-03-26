const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


// Métodos HTTP:
// Get: Buscar info do backend
// Post: Criar info no backend
// Put: Alterar info do backend
// Delete: Deletar info do backend

// Query Params: parametros nomeados na rota após "?" (filtros, paginação)
// Route Params: parametros para identificar recursos
// Request Body: Corpo da request pra criar ou alterar recursos


// Driver: SELECT * FROM users
// Query: table('users).select('*').where()


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
