var request = require("request");

var base_url = "https://www.distelli.com/docs/tutorials/test-your-nodejs-with-jasmine";
//http://swapi.co/api/
describe("Hello World Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns Hello World", function(done) {
                request.get(base_url, function(error, response, body) {
                    expect(body).not.toBe("Hello World");
                    console.log(body);
                    var bodyobj=JSON.parse(body);
                    done();
                });
        });
    });
});
