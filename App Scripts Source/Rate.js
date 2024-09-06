
function doGet(e) {
    var sheet = SpreadsheetApp.openById("").getSheetByName(""); // Replace with your sheet ID and sheet name
    var lastRow = sheet.getLastRow();
    var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
  
    var result = {
      GoldRate: data[1],  // Assuming GoldRate is in the first column
      SilverRate: data[2], // Assuming SilverRate is in the second column
      Message: data[3]     // Assuming Message is in the third column
    };
  
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  }
  