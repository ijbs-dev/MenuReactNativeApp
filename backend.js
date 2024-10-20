const { NestFactory } = require('@nestjs/core');
const { Module, Controller, Get, Query } = require('@nestjs/common');

// Questão 1 - Soma
class Questao1Controller {
  calcularSoma(req, res) {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
      K += 1;
      SOMA += K;
    }

    res.json({ soma: SOMA });
  }
}

// Questão 2 - Percentual
class Questao2Controller {
  calcularPercentual(req, res) {
    const SP = 67836.43;
    const RJ = 36678.66;
    const MG = 29229.88;
    const ES = 27165.48;
    const OUTROS = 19849.53;

    const total = SP + RJ + MG + ES + OUTROS;

    res.json({
      SP: (SP / total) * 100,
      RJ: (RJ / total) * 100,
      MG: (MG / total) * 100,
      ES: (ES / total) * 100,
      OUTROS: (OUTROS / total) * 100,
    });
  }
}

// Questão 3 - Inverter String
class Questao3Controller {
  inverterString(req, res) {
    const input = req.query.input;
    let stringInvertida = '';

    for (let i = input.length - 1; i >= 0; i--) {
      stringInvertida += input[i];
    }

    res.json({ invertida: stringInvertida });
  }
}

const app = require('express')();
app.get('/questao1', (req, res) => new Questao1Controller().calcularSoma(req, res));
app.get('/questao2', (req, res) => new Questao2Controller().calcularPercentual(req, res));
app.get('/questao3', (req, res) => new Questao3Controller().inverterString(req, res));

// Módulo principal que registra todos os controladores
async function bootstrap() {
  await app.listen(3000);
  console.log('Servidor rodando em http://localhost:3000');
}

bootstrap();
