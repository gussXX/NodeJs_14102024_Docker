const express       = require('express');
const cors          = require('cors');
const app           = express();
const morgan        = require('morgan');
const os            = require('os'); 

const interfaces = os.networkInterfaces();

const PORT      = process.env.PORT || 3000;
<<<<<<< HEAD
const ADDRESS   = process.env.ADDRESS || interfaces['lo'][0]['address']
=======
const ADDRESS   = process.env.ADDRESS || interfaces['Ethernet'][1]['address']
>>>>>>> aebc3e57ebadb828c4921c80c19422da10372255
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Permita cookies
};

// Middleware para interpretar JSON
app.use(express.json());
app.use(cors(corsOptions));

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

app.get('/api/saudacao', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.post('/api/saudacao', (req, res) => {
    const nome = req.body.nome;
    res.json({ mensagem: `Olá, ${nome}!` });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://${ADDRESS}:${PORT}`);
});