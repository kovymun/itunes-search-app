/**ITUNES SEARCH APP USER SEARCH INPUT COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { Button, Form, Col, Row, FormSelect } from "react-bootstrap";

/*Array containing objects representing each media type and their corresponding value*/
const mediaTypes = [
  { mediaType: "All media", value: "all" },
  { mediaType: "Movie", value: "movie" },
  { mediaType: "Podcast", value: "podcast" },
  { mediaType: "Music", value: "music" },
  { mediaType: "Music Video", value: "musicVideo" },
  { mediaType: "Audio Book", value: "audiobook" },
  { mediaType: "Short Film", value: "shortFilm" },
  { mediaType: "TV Show", value: "tvShow" },
  { mediaType: "Software", value: "software" },
  { mediaType: "E-book", value: "ebook" },
];

/*Search Input component: This component allows the user to enter their desired "search term" and select the "media type" of content they wish to view.*/
export default function SearchInput({
  search,
  searchValue,
  handleType,
  handleSearch,
}) {
  return (
    <div className="search-bar-container">
      <Form onSubmit={handleSearch}>
        <Row>
          <Col lg={6}>
            <Form.Group>
              <Form.Control
                name="searchTerm"
                placeholder="Search.."
                value={searchValue}
                onChange={search}
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group>
              <FormSelect onChange={handleType}>
                {/* Map through media array to create a list of options to select from */}
                {mediaTypes.map((media) => (
                  <option key={media.value} value={media.value}>
                    {media.mediaType}
                  </option>
                ))}
              </FormSelect>
            </Form.Group>
          </Col>
          <Col lg={2}>
            <Button lg={2} variant="dark" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Components:
Utilized the React-Bootstrap Button, Form, Col, Row, FormSelect components as an interface, for the user to enter their desired search term.
Referenced the React-Bootstrap documentation website for this information. 
https://react-bootstrap.github.io/
*/
