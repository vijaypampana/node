'use strict';
var data=require('../DataFiles/TestData.json');
var AngularPage = require('../PageFiles/SpecPage.js');
describe('angularjs homepage', function() {
    var page;
    it('should instanciate Angular page', function(done)
    {
       page= new AngularPage();  //1
       done();
    });

      it('should greet the named user', function(done) {
          browser.ignoreSynchronization=true;
          browser.sleep(5000);
          browser.get('http://www.angularjs.org');  //2
          browser.sleep(10000);
          page.typeName(data.Name);
          expect(page.greeting).toEqual(data.Expectation01);
          done();
  });


  describe('todo list', function() {
    beforeEach(function(done) {
      browser.get('http://www.angularjs.org');
      done();
    });

    it('should list todos', function(done) {
        expect(page.todoList.count()).toEqual(2);           //3
        expect(page.todoAt(1)).toEqual(data.Expectation02);
      done();
    });

    it('should add a todo', function(done) {
        page.addTodo('write a protractor test');
        expect(page.todoList.count()).toEqual(3);  //4
        expect(page.todoAt(2)).toEqual(data.Expectation03);
       done();

    });

  });
 it('should scroll up',function()
  {
    browser.executeScript('window.scrollTo(0,0);').then(function () {
    });  //5
    page.learnangular.click();
    browser.sleep(10000);
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    expect(page.brand_image.isPresent());
  });
  it('should scroll down to element',function(){
      browser.sleep(10000);
      page.ele.click();   //6
      browser.executeScript("arguments[0].scrollIntoView();", page.Playcourse.get(1).getWebElement());
      page.Playcourse.get(1).click();
      browser.sleep(10000);
  });
  
  });