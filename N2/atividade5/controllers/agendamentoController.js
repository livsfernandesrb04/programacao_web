const AgendamentoConsulta = require('../models/AgendamentoConsultaModel')

let agendamentos = []
    
function getIndex(req, res) {
    let dados_erros = {
        erro_nome:req.query.erro_nome,
        erro_sobrenome: req.query.erro_sobrenome,
        erro_cpf: req.query.erro_cpf,
        erro_data_nascimento: req.query.erro_data_nascimento,
        erro_telefone: req.query.erro_
    }
    let dados_form = {
        nome: req.query.nome,
        sobrenome: req.query.sobrenome,
        cpf: req.query.cpf,
        data_nascimento: req.query.data_nascimento,
        telefone: req.query.telefone,
        cep: req.query.cep,
        endereco: req.query.endereco, 
        clinica: req.query.clinica,
        especialidade: req.query.especialidade,
        observacoes: req.query.observacoes
    }

    res.render('index.html', {dados_erros, dados_form});
}

function getAgendamentos () {
    AgendamentoConsulta.findAll().then(()=>{
        res.render("agendamentos.html", {agendamentos})
        });
    
}

function getAgendamento


else{
    AgendamentoConsulta.create(dados_agendamento).then(()=>{
    res.render('agendamento.html', {dados_agendamento}); //Pesquisar .catch para verificar cenarios de erro
    });
}




module.exports = {
    getIndex,
    getAgendamentos,
    getAgendamento
}