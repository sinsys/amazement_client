# aMAZEment - A maze runner game

## Description
aMAZEment is a maze runner style game where you have to navigate through a randomly generated maze as quickly as possible. Your run will be timed and a leaderboard will display the best runners out there!

There is one catch... you cannot see the entire maze! You will be limited to a reduced viewport of the maze and must traverse it to win. But don't worry; any tiles you have already stepped on will be marked so that you don't repeat yourself.

## Table of contents

*  [Features](#features)
*  [Technologies](#technologies)
*  [Planning](#planning)
*  [Requirements](#requirements)
*  [Available Scripts](#available-scripts)
*  
## Features
 - 3 levels of difficulty
 - Near infinite possible maze combinations
 - Keyboard or touch navigation

## Technologies
| Language | Framework/Library | Version |
| :--- | :---: | ---: |
| **HTML 5** | *n/a* | *n/a* |
| **CSS 3** | *n/a* | *n/a* |
| **JS ES6** | **React** | *16.13* |
| | **Node** | *12.16* |
| | **Express** | *4.17.1* |
| **pgSQL** | **PostgreSQL** | *10.12* |

## Planning
- Gantt Chart for progress tracking: [Gantt Chart](https://docs.google.com/spreadsheets/d/1G_G0ksrQKUb6JlzIhDMscehSxYiok8L5uuWnNtSqWow/edit?usp=sharing)
- User Stories for use-cases: [User Stories](https://docs.google.com/spreadsheets/d/1G_G0ksrQKUb6JlzIhDMscehSxYiok8L5uuWnNtSqWow/edit#gid=253511204?usp=sharing)
- Wireframes: [Wireframes Navigator](https://sinsys.github.io/amazement_client/wireframes/index.html)
<!-- - User Flows: [User Flows on Draw.io](https://drive.google.com/file/d/1Z--cjFDzV-dabEC5hAtgKheW9UV70B5F/view?usp=sharing) -->

## Requirements

- Your app must do something interesting or useful
- Your app must be a fullstack app using React, CSS, Node, Express, and PostgreSQL.
- The client and API should be deployed separately and stored in separate GitHub repos.
- Both client- and server-side code must be tested.
- At a minimum, you should test the happy path for each endpoint in your API and include a smoke test for each component in your React client. If time permits, include tests for the unhappy paths for each endpoint and add snapshot tests for your client where appropriate.
- Your app must be responsive and work just as well on mobile devices as it does on desktop devices.
- All code must be high quality, error-free, commented as necessary, and clean. When a hiring manager looks at your code, you want them to think, "This person has great coding habits". There should be no errors in the console.
- The styling on your client must be polished. That means choosing fonts and colors that make sense, correctly sizing different components, and ensuring that it looks great on both mobile and desktop devices.
- The content of your app must be clear and readable.
- You **must** use vanilla CSS for styling capstones. Frameworks like Bootstrap are not permitted. We've found that employers prefer to see candidates who demonstrate a true understanding of CSS.
- You must have comprehensive README files for both GitHub repos (we'll discuss this step in detail at the end of this module).
- Your app must have a landing page that explains what the app does and how to get started, in addition to pages required to deliver the main functionality.
- You must deploy a live, publicly-accessible version of your app.
- Your app must live at a custom URL and include a Favicon (we'll cover this later in the module)
- Your app must work across different browsers (Chrome, Firefox, and Safari at a minimum)
- If you choose to include an authentication system in your app, you must set up a demo user account and indicate on the landing page how to use it.

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.