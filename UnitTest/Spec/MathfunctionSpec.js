describe("Math", function() {
  var math;


  beforeEach(function() {
    math = new Mathfunc();

  });

describe("Math finctions", function(){

    it("should be able to multiply", function() {

        expect(math.multiply(10, 40)).toEqual(400);
    });
    it("should be able to add", function() {

        expect(math.add(10, 40)).toEqual(50);
    });
    it("should be able to add", function() {

        expect(math.devide(40, 10)).toEqual(4);
    });it("should be able to sub", function() {

        expect(math.sub(40, 40)).toEqual(0);
    }); 
    it("should be able to factorial", function() {

        expect(math.factorial(4)).toEqual(24);
    });
    it("should be able to throw error in factorial operation when the number is negative", function() {

        expect(math.factorial(-1)).toThrow("There is no factorial for negative number");
    });
    it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
        var foo = function () {
            throw new TypeError("foo bar baz");
        };

        expect(foo).toThrowError("foo bar baz");
    });
});

});
