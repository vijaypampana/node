var frisby = require('frisby');
const api_url = 'http://jsonplaceholder.typicode.com/posts';
//var base_url = "https://www.distelli.com/docs/tutorials/test-your-nodejs-with-jasmine";

describe("Hello World Server", function() {
  it('should validate the title of the page & GET response of posts', function (doneFn) {

 // Do all your protractor UI tests like validating title of page
  expect(browser.getTitle()).toEqual('JSONPlaceholder - Fake online REST API for developers');

// Do your API tests here like validating get response
  frisby
      .get(api_url + '/1')
      .expect('status', 200)
      .expect('jsonContains', {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })
      .done(doneFn)

});

});
