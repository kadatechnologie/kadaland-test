function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Kada Gestion - Live App v3')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // Permet l'intégration si besoin
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * TODO Sheets: Point d'entrée futur pour toutes les mutations de données.
 * Le front-end enverrait des objets {action: 'ADD_CLIENT', payload: {...}}
 * et recevrait en retour le nouvel état complet.
 */
function doPost(e) {
  // const payload = JSON.parse(e.postData.contents);
  // switch (payload.action) {
  //   case 'ADD_CLIENT':
  //     // code pour ajouter un client à Google Sheets
  //     break;
  //   // ... autres cas
  // }
  // return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}

/**
 * TODO Sheets: Permettrait d'inclure des fichiers HTML/CSS/JS séparés si nécessaire.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
