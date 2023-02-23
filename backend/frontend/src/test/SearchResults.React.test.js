/**ITUNES SEARCH APP SEARCH RESULTS COMPONENT JEST SNAPSHOT TEST FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import React from "react";
import SearchResults from "../components/search-bar-comp/SearchResults";
import renderer from "react-test-renderer";

it("SearchResult component renders correctly", () => {
  const tree = renderer.create(<SearchResults />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**REFERENCES**/
/*
JEST Snapshot testing:
Referenced the JEST testing framework website for information on how to perform snapshot testing on a component.
https://jestjs.io/docs/snapshot-testing
*/
