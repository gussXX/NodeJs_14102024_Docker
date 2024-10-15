const express       = require('express');
const cors          = require('cors');
const app           = express();
const morgan        = require('morgan');
const os            = require('os'); 

const interfaces = os.networkInterfaces();

const PORT      = process.env.PORT || 3000;
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
    console.log("12:35")
    console.log(`Servidor rodando em http://:${PORT}`);
});