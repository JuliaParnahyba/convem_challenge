import express from 'express';
import dotenv from 'dotenv';
import cashInRoutes from './routes/cashInRoutes';
import { saveTransaction } from './services/dynService';
import { CreateMeshInput } from 'aws-sdk/clients/appmesh';
import { AppConfig } from 'aws-sdk';

// Carregar as variáveis do arquivo .env
dotenv.config();

// Inicializando o express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para aceitar JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Rodando API');
});

// Usando as rotas do cashInRoutes
app.use('/api/cash-in', cashInRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});