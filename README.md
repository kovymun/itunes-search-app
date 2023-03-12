# iTunes Search App (Full-Stack Web Development)

## Table of Contents:

- [Description](#description)
- [Tools and Programming languages used](#tools-and-programming-languages-used)
- [Installation guide](#installation-guide)
- [Usage guide](#usage-guide)
- [App Security Measures](#app-security-measures)
- [App Testing Measures](#app-testing-measures)
- [Credits Section](#credits-section)

## Description:

This is a **Full Stack web development learning project** - of an **iTunes Search App**. It was developed using front end tools ReactJS - JavaScript framework, back end tools ExpressJS framework, and design tools CSS, Bootstrap V5 and React-Bootstrap library. This app allows the user to search for their favorite media content within the iTunes and Apple Books Stores. In addition, the user has the option to add the *searched item* to their *list of favorites.*

## Tools and Programming languages used:

- Code Editor - VS Code.
- ReactJS - JavaScript Framework.
- ExpressJS - NodeJS Framework.
- CSS.
- Bootstrap V5.
- React-Bootstrap library.

## Installation Guide:

To install and use this project, **follow these guidelines**:

Downloading the repository:

- Click the small arrow on the green **Code** button at the top right of the repository contents.
- From the *drop-down options*, select **Download Zip.**
- This will download the repository to your local machine.

![Github download](https://user-images.githubusercontent.com/78513588/221423293-c529226d-3e86-4afd-a3c5-fafe1ffc85e8.png)

Once the repository has been downloaded, execute the following steps:

- Open the **backend** directory in VS code editor or editor of choice.
- Take a moment to view how the project folders are structured.
- In your *command line interface*, run **npm install** to install the packages and dependencies for the back-end of the application.
- While in the **backend** directory, navigate to the **frontend** directory. *cd frontend* and run **npm install** to install the packages and dependencies for the front-end of the application.
- Once packages and dependencies are installed, navigate back to the **backend** directory *cd ..* and run **npm start** to start up the website/app.
- Once your server is running, navigate to **localhost:3000** on your browser to view the app.

## Usage Guide:

The iTunes Search App allows the user to search for their favorite media content within the iTunes and Apple Books Stores. In addition, the user has the option to add the *searched item* to their *list of favorites.*

It consists of two pages:

- The Home Page.
- The *Favorite* items page.

In-order to explore the features and content of this app, follow these guidelines:

- To **search** for content, enter your **Search Term** into the **text-box**.
- Select your **Media** option from the **Drop-Down Menu.**
- Click on the **Search** button, to reveal your **Search Results**.
- To add *searched items* to your *favorites list*, click on the **Add to Favorites** button.
- To access further guidelines on how to navigate the app, click on the **Help** button in the *Home Page* Navigation Bar. 
- To access your *favorites list*, click on the **Favorites** link button in the *Home Page* Navigation Bar.

![Home Page](https://user-images.githubusercontent.com/78513588/221423379-045d53d0-c3d4-4d6a-88d8-62e2dd0714c2.png)

![Home Page with Search Results example](https://user-images.githubusercontent.com/78513588/221423395-9355c96c-fd37-4656-8ddf-da0d02aee138.png)

![Favorites Page](https://user-images.githubusercontent.com/78513588/221423426-6f5dbb91-d740-4500-9a4d-5308ff6d3b0b.png)

## App Security Measures:

In modern times, app users and programmers must be mindful of the **risks** associated with any technology used in your application. As such, **measures** have been taken to secure the back-end of this app.

- **Helmet.js framework** is used to *secure* the back-end ExpressJS portion of the app. HTTP, by design, is open in nature and highly insecure. **Helmet.js** fills in the gap between Node.js and Express.js by **securing HTTP headers** that are returned by the ExpressJS app.
- No secure API keys have been used in this app.

## App Testing Measures:

**Front-End Testing:**

In this project, *Front-end testing* is performed using **Enzyme and Jest** testing libraries. There are *two tests* designed for the front-end - a **snapshot test**, and a **unit test**. To run the tests, follow these **guidelines**: 

- In the command line interface, navigate to the **frontend** directory folder, using the following command *cd backend/frontend*.
- **enzyme** library has already been installed using the following command, *npm install --save-dev enzyme @cfaester/enzyme-adapter-react-18*.
- To execute your test, run **npm test** in your command line interface.
- Review your *test results*.

**Back-End Testing:** 

In this project, *Back-end unit testing* is performed using **Mocha** and **Chai** testing libraries. To run the test, follow these **guidelines**: 

- In the command line interface, navigate to the **backend** directory folder, using the following command *cd backend*.
- **mocha and chai** libraries have already been installed using the following command, *npm install --save-dev mocha chai*.
- To execute your test, run **npm test** in your command line interface.
- Review your *test results*.

## Credits Section:

Sole contributor to this project.
