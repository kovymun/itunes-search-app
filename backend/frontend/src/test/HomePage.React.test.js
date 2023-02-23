/**ITUNES SEARCH APP REACTJS UNIT TEST FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import HomePage from "../pages/HomePage";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

/*
Using Enzyme testing library, unit testing of our front-end ReactJS application will apply the following test case scenarios:
Test Case 1: We verify if the iTunes Search App Home Page renders without crashing.
Test Case 2: We verify if the App Welcome Text is configured on the Home Page.
*/

describe("Verifying render of the Home Page, and if Welcome Text is configured within the Home Page", () => {
  it("Renders the Home Page without crashing", () => {
    shallow(<HomePage />);
  });

  it("Tests if Welcome text is configured within the Home Page", () => {
    const wrapper = shallow(<HomePage />);
    const welcome = (
      <h3 className="intro-text">
        Welcome to the iTunes Search App! Search your favorite content within
        the iTunes and Apple Books Stores.
      </h3>
    );
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});

/**REFERENCES**/
/*
Enzyme Testing Library:
Researched and utilized additional information as documented on the "Smashing Magazine" website on unit testing using "Enzyme" library.
Referenced the web link below for this information.
https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/
*/
