const Sequelize = require('sequelize');
const db = require('../db');

const AgendamentoConsulta = db.define('agendamento_consulta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: 
    },
    cep:"",
    endereco:"",
    clinica: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
    },
    especialidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data_da_consulta:{
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_da_consulta:{
        type: Sequelize.DataTypes.TIME,
        allowNull: false
    },
    observacao: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = AgendamentoConsulta;