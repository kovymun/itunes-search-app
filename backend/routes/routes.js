/**ITUNES SEARCH APP EXPRESSJS BACKEND ROUTER FILE**/

/*Importing the necessary files and modules into the backend router file.*/
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const router = express.Router();
const fs = require("fs");

/*Setting up the Router middleware. Note: helmet framework was used to secure this expressJS back-end application.*/
router.use(helmet());
app.use(cors());
app.use(morgan("dev"));

/*Array of all favorite search items read from the favorites.json file*/
let favorites = JSON.parse(fs.readFileSync("./favorites.json"));

/*Function to generate a random favorite item ID using Math.floor, Math.random and Date() methods.*/
const generateId = () => {
  return Math.floor(Math.random() * Date.now());
};

/*
HTTP GET request:
Using the get() method, we are able to read and display the total list of favorite items as currently stored in the favorites.json file.
Utilized the Router method from the ExpressJS module, to serve up the data we requested, to the path as defined in the get() method (in this case, its the /favorites path). 
*/
router.get("/favorites", (req, res) => {
  try {
    res.json({
      message: "Your list of Favorite Media:",
      favorites,
    });
  } catch (error) {
    res.send(`Error message: ${error}`);
  }
});

/*
HTTP POST Request:
Using the post() method, we are able to add a new favorite item, passed from the ReactJS front-end app VIA an HTTP request body, to the array of favorite items. 
*/
router.post("/favorites/add-favorite", (req, res) => {
  const id = generateId();
  const bodyData = req.body;
  // Create a new favorite item
  newFaveItem = Object.assign({ id }, bodyData);
  favorites = [...favorites, newFaveItem];

  fs.writeFile("favorites.json", JSON.stringify(favorites), (error) => {
    if (error) {
      res.send(`Error message: ${error}`);
    }
  });

  return res.json({
    message: "Item added successfully",
    favorites,
  });
});

/*
HTTP DELETE Request:
Using the delete() method, we are able to remove a favorite item stored in the array of favorite items, based on it's unique ID.
*/
router.delete("/favorites/:id", (req, res) => {
  const favoriteId = Number(req.params.id);
  for (i = 0; i < favorites.length; i++) {
    if (favorites[i].id === favoriteId) {
      favorites.splice(i, 1);
    }
  }

  fs.writeFile("favorites.json", JSON.stringify(favorites), (error) => {
    if (error) {
      res.send(`Error message: ${error}`);
    }
  });

  return res.json({
    message: "Favorite item deleted",
    favorites,
  });
});

module.exports = router;
