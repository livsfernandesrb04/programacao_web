const express = require('express');
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController');
const usuarioController = require('../controller/usuarioController');

router.get("/", usuarioController.verificarAutenticacao,agendamentoController.getIndex);
router.get("/agendamentos", usuarioController.verificarAutenticacao, agendamentoController.getAgendamentos);
router.post("/agendamento", usuarioController.verificarAutenticacao, agendamentoController.postAgendamento);

module.exports = router;