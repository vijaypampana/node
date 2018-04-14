'use strict';

var AngularPage = function () {
    //browser.get('http://www.angularjs.org');
};

AngularPage.prototype = Object.create({}, {
    todoText: { get: function () { return element(by.model('todoList.todoText')); }},
    addButton: { get: function () { return element(by.css('[value="add"]')); }},
    yourName: { get: function () { return element(by.model('yourName')); }},
    greeting: { get: function () { return element(by.binding('yourName')).getText(); }},
    todoList: { get: function () { return element.all(by.repeater('todo in todoList.todos')); }},
    typeName: { value: function (keys) { return this.yourName.sendKeys(keys); }},
    todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); }},
    addTodo: { value: function (todo) {
        this.todoText.sendKeys(todo);
        this.addButton.click();
    }},
    learnangular:{ get: function(){ return element(by.xpath('/html/body/div[1]/div[1]/div/div[4]/a'));}},
    brand_image:{ get: function(){ return element(by.className('brand-img'));}},
    call_url:{ value: function(){  browser.get('http://www.angularjs.org');}},
    ele:{get: function(){ return element(by.css('.mbs.twb'));}},
    Playcourse: {get: function(){ return element.all(by.css('.btn.btn--wide.stickyButton'));}}
});

module.exports = AngularPage;