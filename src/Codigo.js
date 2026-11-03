/** Endpoints do sorteio. O ID da planilha fica em Script Properties (SPREADSHEET_ID). */
function abrirInscricoes_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  return SpreadsheetApp.openById(id).getSheetByName('Inscricoes');
}
function sortear() {
  const linhas = abrirInscricoes_().getDataRange().getValues().slice(1);
  const lista = SorteioPuro.prepararElegiveis(linhas, true);
  const carimbo = SorteioPuro.carimboDeData(new Date());
  const r = SorteioPuro.escolher(lista, carimbo);
  const aud = abrirInscricoes_().getParent().getSheetByName('Auditoria');
  aud.appendRow([carimbo, r.hashLista, r.seed, r.indice, lista.length, r.ganhador.numero]);
  return SorteioPuro.visaoPublica(Object.assign({}, r.ganhador, SorteioPuro.resumir(lista), r, { quando: carimbo }));
}
function doGet() { return HtmlService.createHtmlOutputFromFile('AoVivo').setTitle('Sorteio ao vivo'); }
