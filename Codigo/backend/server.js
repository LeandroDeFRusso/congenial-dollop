const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
const pessoasData = [];

app.use(express.static('front-end'));

const validarCPF = (cpf) => {
    return /^\d{11}$/.test(cpf);
};

app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de cadastro de Pessoas!');
});

app.post('/pessoas', (req, res) => {
    const { nome, cpf, telefone } = req.body;

    if (!nome || !cpf || !telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (!validarCPF(cpf)) {
        return res.status(400).json({ message: 'CPF inválido' });
    }

    const cpfExistente = pessoasData.find(p => p.cpf === cpf);
    if (cpfExistente) {
        return res.status(409).json({ message: 'CPF já cadastrado' });
    }

    const novaPessoa = { nome, cpf, telefone };
    pessoasData.push(novaPessoa);

    res.status(201).json({ message: 'Pessoa cadastrada com sucesso', data: novaPessoa });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
