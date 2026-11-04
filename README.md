# Sorteio verificável com Google Apps Script

🇺🇸 [English version](README.en.md)

> Projeto de portfólio. Código adaptado de uma automação real em produção; **todos os dados, nomes, IDs e valores são fictícios**.

## Problema
Um evento precisava sortear prêmios entre inscritos de um formulário de forma transparente: qualquer pessoa deveria conseguir conferir que o resultado não foi manipulado, sem expor dados pessoais.

## Solução
- Inscrições via formulário/planilha, cada uma com número e código de cupom.
- Algoritmo determinístico (sem `Math.random`): `hash = SHA-256(lista ordenada)`, `seed = SHA-256(carimbo de data + hash)`, `índice = seed mod total`.
- A mesma função roda no Apps Script, no navegador e em teste Node.
- Tela ao vivo mostra só primeiro nome e código mascarado; telefone nunca entra no hash nem na tela.
- Função `conferir` permite auditoria posterior.

## Resultado
Sorteio auditável e reproduzível, com proteção de dados dos participantes.

## Stack
Google Apps Script, JavaScript, HTML, Google Sheets

## Como rodar
`node teste.js` para ver um sorteio com dados fictícios. Para o Apps Script, copie `src/` para um projeto ligado a uma planilha com colunas `numero,codigo,nome`.

## Autora
Hadassa Lopes — [LinkedIn](https://www.linkedin.com/in/kesia-hadassa-vieira)
