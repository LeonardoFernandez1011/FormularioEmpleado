const express = require('express');
const router = express.Router()

const register = require('../controllers/register.controller');

// Endpoint para mostrar todos los usuarios
router.get('/', register.getRegisters);

// Endpoint para agregar un usuario
router.post('/', register.postRegister);

// Endpoint para editar un usuario
router.put('/:id', register.editRegister);

// Endpoint para borrar un usario
router.delete('/:id', register.deleteRegister);

module.exports = router;