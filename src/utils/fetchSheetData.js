

export const fetchSheetData = async(sheetId , sheetName)=>{
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${process.env.REACT_APP_GOOGLE_SHEET_API_KEY}`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.values;
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        return null;
    }
}