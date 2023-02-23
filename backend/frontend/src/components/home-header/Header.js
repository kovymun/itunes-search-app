/**ITUNES SEARCH APP HOME PAGE HEADER AND NAVIGATION COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import HelpModal from "./HelpModal";

/*
The iTunes Search App Home Page Header and Navigation component consists of the following elements/components:
* The iTunes search app "logo".
* A "Help" button which reveals a "modal" with guidelines for the user to navigate the app.
* A "Favorites" link button which routes the user to the "Favorite" items page.
*/
export default function Header() {
  return (
    <div className="home-page-header">
      <h2>iTunes Search App</h2>
      <div className="header-btn-container">
        <HelpModal />
        <Link to="/favorites">
          <Button className="btn btn-light">Favorites</Button>
        </Link>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
React-Router-DOM Link component: 
Researched and utilized the React-Router-DOM "Link" component, which routes the user to the "Favorites" page of the app.
Referenced the React-Bootstrap website for this information.
https://reactrouter.com/en/main/components/link#link
*/
