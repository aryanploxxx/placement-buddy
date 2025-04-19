
export const fetchSheetData = async (spreadsheetId, range, apiKey) => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.values;
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return null;
  }
};