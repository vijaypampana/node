'use strict';
var data=require('../DataFiles/TestData.json');
var AngularPage = require('../PageFiles/istockPage.js');
var page = new AngularPage();

describe("istock login page validations",function()
{
   it("it should navigate to istock homepage", function(){
     page.call_url();
     expect(page.signin.isPresent()).toBe(true);
   });
   it("it should test valid credentials for application", function(){
      page.signin.click();
      page.username.sendKeys(data.Username);
      page.password.sendKeys(data.Password);
      page.signin_button.click();
      expect(page.menu.isPresent()).toBe(true);
   });
   it("it should logout the application", function(){
      page.menu.click();
      page.signout.click();
      expect(page.signin.isPresent()).toBe(true);
   });
   it("it should test invalid credentials for application", function(){
      page.signin.click();
      page.username.sendKeys(data.inUsername);
      page.password.sendKeys(data.inPassword);
      page.signin_button.click();
      var result = page.alert.getText();
      expect(result).toEqual(data.actualtext);
   });
});

describe("istock homepage validations", function(){
  it("it should navigate to istock homepage", function(){
    page.call_url();
    expect(page.signin.isPresent()).toBe(true);
  });
  it("it should verify number of elements in dropdown", function(){
  page.dropdown.click();
  expect(page.dropdownnum.count()).toEqual(4);
  });

describe("istock board validations", function(){
  it("it should navigate to istock homepage", function(){
    page.call_url();
    expect(page.signin.isPresent()).toBe(true);
  });
  it("it should create first board", function(){
    page.yourboard.click();
    page.boardname.sendKeys(data.BoardName);
    page.boarddes.sendKeys(data.BoardDescription);
    page.create.click();
    expect(browser.getTitle()).toEqual(data.expectation);

  })

});

})
