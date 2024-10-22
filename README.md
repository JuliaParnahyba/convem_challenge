# Desafio Convem 💡

- [Descrição 📝](#descrição-📝)
- [Estrutura do Projeto 🗂️](#estrutura-do-projeto-🗂️)
- [Tecnologias Utilizadas ⚙️](#tecnologias-utilizadas-⚙️)


## Descrição 📝
Este projeto é um desafio proposto pela Empresa Comvem dedicado aos alunos da 42 Rio. 

Nesse implementar a integração com a API de Pix do Asaas para gerenciar depósitos (cash in) e saques (cash out), incluindo funcionalidades para geração de QR Codes, recebimento de notificações via webhooks e gerenciamento de transações utilizando a AWS (DynamoDB, SQS, Lambda).


## Estrutura do Projeto 🗂️

```bash
DesafioConvem/ 
├── src/ 
│ ├── server.ts # Arquivo principal do servidor 
│ ├── routes/ 
│ │ └── cashin.ts # Rotas para depósitos (cash in) 
│ │ └── cashout.ts # Rotas para saques (cash out) 
│ └── utils/ # Funções utilitárias 
│ └── aws.ts # Integração com serviços AWS 
├── .env # Configurações do ambiente 
├── package.json # Dependências e scripts 
└── README.md # Documentação do projeto
```

ou

```bash
DesafioConvem/ 
├── src/ 
│ ├── controllers/ # Controladores que gerenciam a lógica de cada rota 
│ │ ├── cashInController.ts # Lógica de Cash In (depósitos) 
│ │ └── cashOutController.ts # Lógica de Cash Out (saques) 
│ ├── routes/ # Rotas que lidam com as requisições HTTP 
│ │ ├── cashInRoutes.ts # Rotas de Cash In 
│ │ └── cashOutRoutes.ts # Rotas de Cash Out 
│ ├── services/ # Serviços que lidam com a integração de APIs externas 
│ │ └── asaasService.ts # Serviço para integração com a API do Asaas 
│ ├── utils/ # Utilitários e helpers para o projeto 
│ │ └── awsHelpers.ts # Funções utilitárias para integração com AWS 
│ ├── config/ # Configurações e variáveis de ambiente 
│ │ └── awsConfig.ts # Configurações da AWS (DynamoDB, SQS, Lambda) 
│ └── server.ts # Arquivo principal do servidor 
├── tests/ # Testes automatizados do projeto 
│ └── generateQRCodesTest.ts # Teste para gerar 100 QR Codes 
├── .env # Variáveis de ambiente (configurações sensíveis) 
├── package.json # Dependências e scripts do Node.js 
└── README.md # Documentação do projeto
```

## Tecnologias Utilizadas ⚙️

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [AWS SQS](https://aws.amazon.com/sqs/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Asaas API](https://asaas.com/)




