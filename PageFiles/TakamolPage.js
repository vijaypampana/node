'use strict';

var Takamol = function () {
    //browser.get('http://www.angularjs.org');
};

Takamol.prototype = Object.create({}, {


    startbutton: { get: function () {
    return element(by.xpath('//*[@id="hero"]/div[1]/ul/li[3]/div/div/div/div[2]/a')); }},
    firstmenu: { get: function () { return element(by.xpath('//*[@id="menu-item-624"]/a')); }},
    secondmenu: { get: function () { return element(by.xpath('//*[@id="menu-item-625"]/a')); }},
    joinnow: { get: function () { return element(by.xpath('//*[@id="join_us_row"]/div[4]/div/div[2]/div/div/a')); }},
    thirdmenu: { get: function () { return element(by.xpath('//*[@id="menu-item-6"]/a')); }},
    call_url:{ value: function(){  browser.get('http://takamolholding.com/');}},

});

module.exports = Takamol;
