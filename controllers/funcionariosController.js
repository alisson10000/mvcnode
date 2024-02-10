// controllers/funcionariosController.js
const express = require('express');
const router = express.Router();
exports.router = router;
const Funcionario = require('../models/Funcionario');

// Rota para listar todos os funcionários
router.get('/', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.render('layouts/index', { funcionarios });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para exibir o formulário de adição de funcionário
router.get('/add', (req, res) => {
  res.render('layouts/add');
});

// Rota para processar a adição de funcionário
router.post('/add', async (req, res) => {
  try {
    const { nome, cpf } = req.body;
    await Funcionario.create({ nome, cpf });
    res.redirect('/funcionarios');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para exibir o formulário de edição de funcionário
router.get('/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const funcionario = await Funcionario.findByPk(id);
    res.render('layouts/edit', { funcionario });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para processar a edição de funcionário
router.post('/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, cpf } = req.body;
    await Funcionario.update({ nome, cpf }, { where: { id } });
    res.redirect('/funcionarios');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});






// Rota para processar a exclusão de funcionário
router.get('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Funcionario.destroy({ where: { id } });
    res.redirect('/funcionarios');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;
