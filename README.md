## Tech Stack:
- ReactJS ( Vite )
- Redux
- Tailwind CSS

## Contributing Guide:
- If you want to work on an existing issue, please assign that issue to yourself so that other people know that you are working on that issue to avoid duplicate efforts.
- Please ensure all the communications/discussions related to the issue happens in the correct thread so that everyone looking at the issue have the context on the developments made so far.
- If you come across any feature you would like to see in the website, feel free to create a new issue and assign to yourself if you want to work on it.

## Setting Up your Project 
- fork the repo and clone it via ssh link (you can find it on code button)
- Now you need to get google spreadsheet id and api key from google console , Follow the stpes below 
    - For spreadhseet it , you should have csv file of json data ( you can get it by json -> csv converter)
    - import it in google sheet and name the file 2024 or 2025 according to json file name you had 
    - Now we make it publiciy accessible so click on share button and click anyien with link as viewer
    image 
    - you can see the sperdsheet id here copy it and paste it .env fike 
    - First create .env file in root directory just like .env.exmample and paste the crdential 
    - Moving on to google sheet api_key 
    - You go to gogle console. first "link' , make account if you dont have 
    - create aa new project , now you enable google sheet api and gogole drive api [image]
    - after doing this crrednetial -> create new api -> copy the key and paste it in env file 
    - That's it, you are ready 
    - Now run t using npm run dev
- 

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
