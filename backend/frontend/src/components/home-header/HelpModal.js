/**ITUNES SEARCH APP HELP GUIDELINE MODAL COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/* This component consists of a React-bootstrap Modal Component, which renders guidelines for the user to use and navigate the iTunes Search App. */
export default function HelpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Help
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>iTunes Search App Help Guidelines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This app allows you to search for your favorite media content within
            the iTunes and Apple Books Stores, and add your favorite searched items
            to your list of "Favorites".
          </p>
          <p>
            In-order to explore the wonderful content of this app, follow these
            Guidelines:
          </p>
          <ul>
            <li>
              To search for content, enter your "Search Term" into the text-box.
            </li>
            <li>Select your "Media" option from the Drop-Down Menu.</li>
            <li>
              Click on the "Search" button, to reveal your "Search Results".
            </li>
            <li>
              To Add search items to your favorite list, click on the "Add to
              Favorites" button.
            </li>
            <li>
              To access your "favorites list", click on the "Favorites" link in
              the "Home Page" Navigation Bar.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Modal Component:
Researched and utilized the React-bootstrap Modal component to hold guidelines for the user to use and navigate the iTunes Search App.
Referenced the React-Bootstrap website for this information.
https://react-bootstrap.github.io/components/modal/#live-demo
*/
