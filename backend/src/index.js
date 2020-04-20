const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors(
    // {   // exemplo de permissão de origem
    //     origin: 'http://meuapp.com'
    // }
    ));
app.use(express.json());
app.use(routes);
/**
* SQL: MySQLm SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
* Escolha do curso: SQLite
*/

/**
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/


app.listen(3333);