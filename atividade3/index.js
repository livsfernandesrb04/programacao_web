const express = require ('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send()
});

//Adiciona um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let id = Number(req.params.id);
    let nome = String(req.params.nome);
    let quant = Number(req.params.qtd);

    res.send()
});

//Lista todos os produtos do estoque
app.get('/listar', (req, res) => {
    res.send()
});

//remove um produto do estoque
app.get('/remover/:id', (req, res) => {
    let id = Number(req.params.id);
    res.send()
});

//Altera a quantidade de um produto do estoque
app.get('/editar/:id/:qtd', (req, res) => {
    let id = Number(req.params.id);
    let quant = Number(req.params.qtd);
    res.send()
});

app.listen(PORT, () => {
    console.log(`Applicativo rodando na porta ${PORT}`)
})


