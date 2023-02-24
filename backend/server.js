/**ITUNES SEARCH APP EXPRESSJS BACKEND SERVER FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*Importing the necessary files and modules into the backend server file.*/
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bp = require("body-parser");
const routes = require("./routes/routes");

/*Setting up the App middleware. Note: helmet framework used to secure this expressJS back-end application.*/
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use("/api", routes);

/*
HTTP GET request with JS FETCH API, to fetch data from Itunes Search API. Refer to link: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html
The search API URL includes the query string parameters of "term" and "media". "term" refers to the search information entered by the user, and "media" refers
to the type of media (e.g. movies, podcasts) of the search.
*/
app.get("/search", (req, res) => {
  const searchTerm = req.query.term; //Getting the search term from the URL.
  const media = req.query.media; //Get ting the media type from the URL.

  fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&media=${media}&limit=10`
  )
    .then((res) => res.json())
    .then((data) => {
      res.json({
        message: "Search was successful",
        data,
      });
    })
    .catch((error) => {
      //Display error message if an error is encountered
      res.send(`Error message: ${error}`);
    });
});

/*Staring the server - App server listening/running on port 8080. Start the server by running "npm start" in your command line terminal.*/
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server is listening on port 8080. Open http://localhost:${PORT}`
  );
});

/**REFERENCES**/
/*
Helmet.js Framework for ExpressJS web application security:
Researched and utilized Helmet to add security to this backend ExpressJS app.
Referenced the Helmet website for all installation and usage information.
https://helmetjs.github.io/

Concurrently NPM package:
Researched and utilized the "concurrently" npm package to concurrently start the front-end ReactJS and the back-end ExpressJS app with one "npm start" command.
Referenced the NPM package manager website for the installation and usage information.
https://www.npmjs.com/package/concurrently
*/
