const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar JSON
app.use(express.json());


app.get('/mlCode', (req, res) => {
    const code = req.query.code; // Pega o valor do parâmetro "code"
    res.send(`O código recebido é: ${code}`);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
