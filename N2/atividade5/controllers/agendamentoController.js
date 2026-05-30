const AgendamentoConsulta = require('../models/AgendamentoConsultaModel')

function getIndex(req, res) {
    let dados_erros = {
        erro_nome:req.query.erro_nome,
        erro_sobrenome: req.query.erro_sobrenome,
        erro_cpf: req.query.erro_cpf,
        erro_data_nascimento: req.query.erro_data_nascimento,
        erro_telefone: req.query.erro_telefone,
        erro_cep: req.query.erro_cep,
        erro_endereco: req.query.erro_endereco, 
        erro_clinica: req.query.erro_clinica,
        erro_especialidade: req.query.erro_especialidade,
        erro_observacoes: req.query.erro_observacoes
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
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render("agendamentos.html", {agendamentos})
    });
}

function postAgendamento(req, res) {
    let dados_agendamento = req.body;

    let query_erros = ""
    let existe_erro = false;
    //Erro nome
    if(
        dados_agendamento.nome == null ||
        dados_agendamento.nome.length == 0 ||
        dados_agendamento.nome.trim() == ""
    ){
        query_erros += "erro_nome=true&";
        existe_erro = true;
    }
    else {
        query_erros += `nome=${dados_agendamento.nome}&`;
    }

    //Erro sobrenome
    if(
        dados_agendamento.sobrenome == null ||
        dados_agendamento.sobrenome.length == 0 ||
        dados_agendamento.sobrenome.trim() == ""
    ){
        query_erros += "erro_sobrenome=true&";
        existe_erro = true;
    }
    else {
        query_erros += `nome=${dados_agendamento.sobrenome}&`;
    }

    //Erro CPF
    //Erro Data de nascimento
    //Erro Telefone
    //Erro CEP
    //Erro Endereço
    //Erro Clínica
    //Erro Especialidade
    

    //Erro Data da consulta 
    // precisa ser depois do dia que a consulta foi agendada

    //Erro Hora da consulta 
    // precisa ser entre as 8:00 até as 18:00

    //Erro Observações

    if(existe_erro){
        res.redirect('/?'+query_erros);
    }
    else{
        AgendamentoConsulta.create(dados_agendamento).then(()=>{
            res.render('agendamento.html', {dados_agendamento}); 
            //Pesquisar .catch para verificar cenarios de erro
        });
    }
}

module.exports = {
    getIndex,
    getAgendamentos,
    postAgendamento
}