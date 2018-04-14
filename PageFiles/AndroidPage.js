'use strict';

var Wayautomation = function () {
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
};

Wayautomation.prototype = Object.create({}, {
    list: { get: function () { return element.all(by.className("btn btn-primary btn-lg")); }},
    button: { get: function () { return element(by.className("btn btn-default")); }}

});

module.exports = Wayautomation;