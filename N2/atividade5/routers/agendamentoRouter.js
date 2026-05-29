const express = require('express');
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController')

router.get("/", agendamentoController.getIndex);
router.get("/agendamentos", agendamentoController.getAgendamentos );
router.post('/agendamento', )