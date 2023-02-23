/**ITUNES SEARCH APP EXPRESSJS BACKEND TEST FILE**/

/*Importing the "chai" and "request" modules into the test file.*/
const chai = require("chai");
const expect = chai.expect;
const request = require("request");

/*
As the code for interfacing with the iTunes Search API is handled by the back-end of the application, unit testing of our back-end ExpressJS application, 
will apply the following test case scenario:

Test Case: Testing of the iTunes search API to review response status code. We will verify a successful request and response to and from the API with 
a response status code of 200.
*/

describe("iTunes search API", () => {
  it("returns a response code of 200", (done) => {
    const searchUrl =
      "https://itunes.apple.com/search?term=tom+cruise&media=movie";
    request(searchUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
