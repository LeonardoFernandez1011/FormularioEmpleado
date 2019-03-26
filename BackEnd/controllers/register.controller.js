const Register = require('../models/register.model');
const infoRegister = {};

// Muestra todos los usuarios registrados
infoRegister.getRegisters = async (req, res) => {
    const registers = await Register.find();
    res.json(registers);
}

// Crea un nuevo usuario
infoRegister.postRegister = async (req, res) => {
    const register = new Register({
        name: req.body.name,
        ocupation: req.body.ocupation,
        telephone: req.body.telephone,
        dependencie: req.body.dependencie,
        age: req.body.age,
        email: req.body.email
    });
    await register.save();
    res.json({
        'status': 'Usuario Registrado'
    })
}

// Muestra un usuario en especifico
infoRegister.getRegisterById = async (req, res) => {
    const register = await Register.findById(req.params.id);
    res.json(register)
}

// Edita usuario seleccionado
infoRegister.editRegister = async (req, res) => {
    const register = {
        name: req.body.name,
        ocupation: req.body.ocupation,
        telephone: req.body.telephone,
        dependencie: req.body.dependencie,
        age: req.body.age,
        email: req.body.email
    }
    await Register.findByIdAndUpdate(req.params.id, { $set: register }, { new: true })
    res.json({
        'status': 'Usuario editado'
    })
}

//Elimina un usuario seleccionado
infoRegister.deleteRegister = async (req, res) => {
    await Register.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Usuario eliminado'
    })
}

module.exports = infoRegister