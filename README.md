## Tech Stack:
- ReactJS ( Vite )
- Redux
- Tailwind CSS

## Contributing Guide:
- If you want to work on an existing issue, please assign that issue to yourself so that other people know that you are working on that issue to avoid duplicate efforts.
- Please ensure all the communications/discussions related to the issue happens in the correct thread so that everyone looking at the issue have the context on the developments made so far.
- If you come across any feature you would like to see in the website, feel free to create a new issue and assign to yourself if you want to work on it.

## 🚀 Setting Up the Project

1. **Fork** the repo and **clone** it using the **SSH link** (found under the green **Code** button on GitHub).

2. **Prepare Google Spreadsheet & API Key:**

   - Convert your JSON data to CSV using any online JSON-to-CSV converter.
   - Import the CSV into a Google Sheet and name the file `2024` or `2025` (based on your JSON data).
   - Click **Share** → Set access to **"Anyone with the link (Viewer)"**.  
     ![Share Settings Screenshot](assets/share-settings.png)

   - Copy the **Spreadsheet ID** from the URL.
     ![Getting sheet id Screenshot](assets/sheet_id.png)
   - Create a `.env` file in the root directory (you can copy from `.env.example`).
   - Paste the Spreadsheet ID in the `.env` file.

3. **Set Up Google API Key:**

   - Visit [Google Cloud Console](https://console.cloud.google.com) and sign in.
   - Create a new project.
   - APi and services -> Enable apis
   - Enable the following APIs:
     - Google Sheets API
     - Google Drive API  
       ![Enable APIs Screenshot](assets/enable-apis.png)

   - Go to **APIs & Services → Credentials → Create Credentials → API Key**.
   - Copy the API key and add it to your `.env` file.

4. **Run the Project:**

   ```bash
   npm run dev


### Steps to Raise a Pull Request:
- **DO NOT work on the main or dev branch, always create a new branch to work on**
- Assign the issue/task to yourself before starting to work.
```sh
git checkout dev
```

```sh
git pull origin dev
```

```sh
git checkout -b "<your-name>/dev/<feat-name>"
```

```sh
raise a pr against dev branch, with proper preview screenshots
```
