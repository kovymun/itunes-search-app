/**ITUNES SEARCH APP HOME PAGE COMPONENT**/

import { useState } from "react";
import Header from "../components/home-header/Header";
import SearchInput from "../components/search-bar-comp/SearchInput";
import SearchResults from "../components/search-bar-comp/SearchResults";

/*Home Page component/page: This component renders the search text input and results as per interaction by the user.*/
export default function HomePage({ addItem }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [media, setMedia] = useState("all"); // useState to save the media type
  const [searchResults, setSearchResults] = useState({}); // useState to save the search results

  /*
  handleSearchTerm function:
  Function to handle the search term entered by user. Search Term entered by the user stored in the "searchTerm" state variable.
  */
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  /*
  handleMediaType function:
  Function to handle the media type selected by the user. Media Type selected by the user stored in the "media" state variable.
  */
  const handleMediaType = (event) => {
    setMedia(event.target.value);
  };

  /*Function to fetch the search results*/
  const fetchSearchResults = () => {
    //Make the API call by sending the search term and media type to the backend using key and value pairs
    fetch(`/search?term=${searchTerm}&media=${media}`)
      .then((res) => res.json())
      .then((response) => setSearchResults(response.data))
      .catch((error) => {
        //Display error message if an error is encountered
        console.log(`Error message: ${error}`);
      });
  };

  /*Function to handle the search submission*/
  const handleSearchSubmit = (event) => {
    if (searchTerm === "") {
      alert(`Please enter a term before searching`);
    } else {
      fetchSearchResults();
    }
    event.preventDefault();
    setSearchTerm("");
  };

  return (
    <div>
      <Header />
      <h3 className="intro-text">
        Welcome to the iTunes Search App! Search your favorite content within
        the iTunes and Apple Books Stores.
      </h3>
      <SearchInput
        search={handleSearchTerm}
        searchValue={searchTerm}
        handleType={handleMediaType}
        handleSearch={handleSearchSubmit}
      />
      <SearchResults searchResults={searchResults} addItem={addItem} />
    </div>
  );
}
