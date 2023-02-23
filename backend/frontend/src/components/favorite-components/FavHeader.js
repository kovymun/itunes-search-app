/**ITUNES SEARCH APP FAVORITE PAGE HEADER COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function FavHeader() {
  return (
    <div className="favorite-page-header mb-4">
      <h2>iTunes Search App Favorites</h2>
      <div className="favorite-btn-container">
        <Link to="/">
          <Button className="btn btn-light">Home</Button>
        </Link>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
React-Router-DOM Link component: 
Researched and utilized the React-Router-DOM "Link" component. In this component, when the user clicks on the "Home" button, it routes the user 
to the "Home Page" of the app.
Referenced the React-Bootstrap website for this information.
https://reactrouter.com/en/main/components/link#link
*/
