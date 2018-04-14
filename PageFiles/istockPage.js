'use strict';

var AngularPage = function () {
    //browser.get('http://www.angularjs.org');
};

AngularPage.prototype = Object.create({}, {
    call_url:{ value: function(){  browser.get("http://www.istockphoto.com/");}},
    signin: { get: function () { return element(by.linkText('Sign in')); }},
    username: { get: function () { return element(by.css('input[type="text"]')); }},
    password: { get: function () { return element(by.id('new_session_password')); }},
    signin_button: { get: function () { return element(by.id('sign_in')); }},
    menu: { get: function () { return element(by.css('.wide-header.right-off-canvas-toggle-menu')); }},
    signout: { get: function () { return element(by.id('hypSignOut')); }},
    alert: { get: function () { return element(by.className("alert_box")); }},
    dropdown: { get: function () { return element(by.css('.dropdown-arrow')); }},
    dropdownnum: { get: function () { return element(by.className('media-types')).all(by.className('option')); }},
    yourboard: { get: function () { return element(by.css(".action-label")); }},
    boardname: { get: function () { return element(by.name('boardname')); }},
    boarddes: { get: function () { return element(by.model('vm.newBoardDescription')); }},
    create: { get: function () { return element(by.linkText('Create')); }},
    typeName: { value: function (keys) { return this.yourName.sendKeys(keys); }},
    todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); }},

});

module.exports = AngularPage;
