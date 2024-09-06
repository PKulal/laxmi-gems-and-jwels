function doGet() {
    try {
      const data = getDataFromSheet();
      return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
      return ContentService.createTextOutput(JSON.stringify({ error: e.message })).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  function getDataFromSheet() {
    const sheetId = '';  // Replace with your Google Sheet ID
    const sheetName = '';  // Replace with your sheet name if different
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    
    if (!sheet) {
      throw new Error('Sheet not found');
    }
  
    const rows = sheet.getDataRange().getValues();
    const data = [];
    
    for (let i = 1; i < rows.length; i++) {
      data.push({
        image: rows[i][0],  // Base64 encoded image
        title: rows[i][1],  // Product title
        description: rows[i][2]  // Product description
      });
    }
    
    return data;
  }
  