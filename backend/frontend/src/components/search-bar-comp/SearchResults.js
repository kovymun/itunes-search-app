/**ITUNES SEARCH APP SEARCH RESULTS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { v4 as uuidv4 } from "uuid";

/*Search Results component: This component displays the result of the user search.*/
export default function SearchResults({ searchResults, addItem }) {
  const searchData = searchResults ? searchResults.results : null;
  const searchResultDisplay = searchData?.map((result) => {
    const searchRenderConditions =
      result.trackName &&
      result.artistName &&
      result.primaryGenreName &&
      result.kind &&
      result.country;

    return searchRenderConditions ? (
      <div className="search-item-container p-3 mt-1 mb-3" key={uuidv4()}>
        <div className="search-item-details">
          <h3>{result.trackName ? result.trackName : "Not Available"}</h3>
          <ul>
            <li>
              Artist Name:{" "}
              {result.artistName ? result.artistName : "Not Available"}
            </li>
            <li>
              Genre:{" "}
              {result.primaryGenreName
                ? result.primaryGenreName
                : "Not Available"}
            </li>
            <li>Media: {result.kind ? result.kind : "Not Available"}</li>
            <li>
              Description:{" "}
              {result.longDescription
                ? result.longDescription
                : "Not Available"}
            </li>
            <li>
              Country: {result.country ? result.country : "Not Available"}
            </li>
          </ul>
          <div className="fav-btn-container">
            <button
              className="btn btn-dark"
              onClick={() => {
                addItem(result);
              }}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    ) : null;
  });

  return <div className="search-result-window">{searchResultDisplay}</div>;
}

/**REFERENCES**/
/*
Researched and utilized the 'uuid' package to generate unique key props ID in the JavaScript map function.
Referenced the NPM package manager for installation and usage information.
https://www.npmjs.com/package/uuid

Javascript Map Method:
Utilized the JavaScript .map() method to render the search results as stored in the "displayProjects" state variable.
Referenced the MDN Dev Docs website for this information.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html
*/
