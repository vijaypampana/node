'use strict';
var data=require('../DataFiles/TestData.json');
var AngularPage = require('../PageFiles/SpecPage.js');
describe('angularjs homepage', function()
{
    var page;

    beforeEach(function ()
    {
        page = new AngularPage();
        page.call_url();
    });

    it('should greet the named user', function ()
    {
        page.typeName(data.Name);
        expect(page.greeting).toEqual(data.Expectation01);
    });


    describe('todo list', function () {

        it('should list todos', function ()
        {
            expect(page.todoList.count()).toEqual(2);
            expect(page.todoAt(1)).toEqual(data.Expectation02);
        });
        it('should add a todo', function ()
        {
            page.addTodo('write a protractor test');
            expect(page.todoList.count()).toEqual(3);
            expect(page.todoAt(2)).toEqual(data.Expectation03);
        });
    });

    describe('ScrollUP', function () {
        it('should scroll up', function ()
        {
            browser.executeScript('window.scrollTo(0,0);').then(function () {
            });
            page.learnangular.click();
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            expect(page.brand_image.isPresent());
        });

    });

});