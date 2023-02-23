/**ITUNES SEARCH APP FAVORITE ITEMS DISPLAY PAGE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import FavHeader from "../components/favorite-components/FavHeader";

/*
Favorite items display page:
This page/component renders the list of favorite searched items of the user. Using the JavaScript map method, the favorite items are mapped from 
"favorites.json" "database" which are stored in the "displayFavorites" state variable.
*/
export default function FavoriteDisplay({ favorites, deleteFavorite }) {
  const favoriteDisplay = favorites.map((favorite) => {
    return (
      <div className="search-item-container p-3 mb-3" key={uuidv4()}>
        <div className="search-item-details">
          <h3>{favorite.trackName ? favorite.trackName : "Not Available"}</h3>
          <ul>
            <li>
              Artist Name:{" "}
              {favorite.artistName ? favorite.artistName : "Not Available"}
            </li>
            <li>
              Genre:{" "}
              {favorite.primaryGenreName
                ? favorite.primaryGenreName
                : "Not Available"}
            </li>
            <li>Media: {favorite.kind ? favorite.kind : "Not Available"}</li>
            <li>
              Description:{" "}
              {favorite.longDescription
                ? favorite.longDescription
                : "Not Available"}
            </li>
            <li>
              Country: {favorite.country ? favorite.country : "Not Available"}
            </li>
          </ul>
          <div className="delete">
            <span
              className="delete-icon"
              onClick={() => {
                deleteFavorite(favorite.id);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="favorite-display">
      <FavHeader />
      <h3 className="intro-text mb-3">iTunes Search App Favorites List</h3>
      <div className="search-result-window">{favoriteDisplay}</div>
    </div>
  );
}

/**REFERENCES**/
/*
Researched and utilized the 'uuid' package to generate unique key props ID in the JavaScript map function.
Referenced the NPM package manager for installation and usage information.
https://www.npmjs.com/package/uuid

Javascript Map Method:
Utilized the .map() method to render the list of favorite items as stored in the "favorites.json" database file.
Referenced the MDN Dev Docs website for this information.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Font Awesome Icons for ReactJS:
Researched and utilized a trash can ReactJS font awesome icon in the individual project display. The trash can icon was used to execute project deletion functionality.
Referenced the Font Awesome website for this icon.
https://fontawesome.com/icons

Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html
*/
