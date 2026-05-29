const express = require ('express');
const mustacheExpress = require('mustache-express');
const agendamentoController = require('');
const db = require('./db');
const app = express();
const PORT = 3000;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views'));
app.use(express.urlencoded({extended: true}))

app.use('/', agendamentoRouter)

db.sync();

app.listen(PORT, () => {
    console.log(`Applicativo rodando naporta ${PORT}`)
});