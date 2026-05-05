const express = require ('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const PORT = 3000;


//configurar o mustache express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));


//Pagina inicial do formulário
app.get('/', (req, res) => {
    res.render('index.html');
});

//Envia os dados do formulário para a rota agendamento
app.post('/agendamento', (req, res) =>{

});

app.listen(PORT, () => {
    console.log(`Applicativo rodando naporta ${PORT}`)
});