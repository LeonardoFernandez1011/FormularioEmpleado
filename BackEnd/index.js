const express = require('express');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database')

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlawares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))

// Rutas
app.use('/api/register', require('./routes/register.routes'))

// Iniciar servicio
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));    
})