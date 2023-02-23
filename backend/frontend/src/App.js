/**ITUNES SEARCH APP.JS REACT COMPONENT**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

/*
This iTunes Search App allows the user to search for their favorite media content within the iTunes and Apple Books Stores. In addition, the user has the option 
to add the searched item to their list of favorites.

Utilized React-Router-DOM "BrowserRouter, Routes and Route" components to create routes/paths for each page. The Route component has two props 
defined, i.e, the "path" and "element" props. Each route displays the component passed to the "element" props in the URL contained in the string passed to 
the "path" props.
*/
export default function App() {
  const [error, setError] = useState(null);
  const [displayFavorites, setDisplayFavorites] = useState([{}]);

  /*
  Using the FETCH API, the useEffect hook is used to retrieve the list of favorite search items from the "favorites.json" "database".
  The response is then stored in the "displayFavorites" state variable, where the data is rendered on the app. See Favorites.js file.
  */
  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then(
        (response) => {
          setDisplayFavorites(response.favorites);
        },
        /* Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components. */
        (error) => {
          setError(error);
        }
      );
  }, []);

  /*Function to add a searched item to the favorite "database" list.*/
  const addItem = (favItem) => {
    fetch("/api/favorites/add-favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favItem),
    })
      .then((res) => res.json())
      .then((response) => {
        setDisplayFavorites(response.favorites);
      });
  };

  /*
  Delete favorite item function to delete a favorite item stored in the "favorites.json" "database" in the back-end ExpressJS server, when the user clicks on the 
  "trash-can icon" in the individual favorite item display. The updated response is then stored in the "displayFavorites" state variable, where the data is rendered on the app. See "Favorites.js" file.
  */
  const deleteItem = (id) => {
    fetch(`/api/favorites/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        const filteredFavorites = displayFavorites.filter(
          (favorite) => favorite.id !== id
        );
        setDisplayFavorites(filteredFavorites);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  /*
  The App.js component renders the following pages/components:
  * Itunes search app "Home Page", which holds the search input and results components.
  * Itunes search app "Favorites page", accessed from the button link on the "Home Page".
  */

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<HomePage addItem={addItem} />}
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={displayFavorites}
                  deleteFavorite={deleteItem}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

/**REFERENCES**/
/*
React Router - BrowserRouter, Routes and Route components:
Researched and utilized the BrowserRouter, Routes and Route React-Router components to create page routes for this App.
Referenced the GeeksforGeeks website for this information.
https://www.geeksforgeeks.org/reactjs-router/

React useState Hook:
Researched and utilized React useState Hook to define variables for dynamic data in this app.
Referenced the w3schools website for this information.
https://www.w3schools.com/react/react_usestate.asp

React useEffect Hook:
Researched and utilized the React useEffect Hook in this app.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/hooks-effect.html
*/
