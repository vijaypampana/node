function Mathfunc() {
}

Mathfunc.prototype.add=function(number1,number2)
{
    return number1 - number2;
};

Mathfunc.prototype.multiply = function(number1, number2) {
    return number1 * number2;
};

Mathfunc.prototype.devide = function(number1, number2) {
    return number1 / number2;
};

Mathfunc.prototype.sub = function(number1, number2) {
    return number1 - number2;
};
Mathfunc.prototype.avg = function(number1, number2) {
    return (number1 + number2) /2;
};
Mathfunc.prototype.factorial = function(number) {

    if (number >= 0) {
        if (number == 0 || number == 1) {
            return 1;
        }
        else {
            return (number * this.factorial(number - 1));

        }
    } else {
        console.log(number);
        throw ("There is no factorial for negative number");
    }
};