const S = require('./src/SorteioPuro.js');
// colunas: [carimbo, numero, codigo, nome, telefone, status]
const linhas = require('./demo/inscricoes_demo.json');
const lista = S.prepararElegiveis(linhas, true);
const r = S.escolher(lista, S.carimboDeData(new Date('2026-10-12T15:00:00-03:00')));
console.log(S.visaoPublica(Object.assign({}, r.ganhador, S.resumir(lista), r, { quando: r.quando || '' })));
console.log(S.conferir(S.carimboDeData(new Date('2026-10-12T15:00:00-03:00')), r.hashLista, r.seed, r.indice, lista.length));
