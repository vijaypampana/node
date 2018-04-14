'use strict';
var data=require('../DataFiles/TestData.json');
var TakamolPage = require('../PageFiles/TakamolPage.js');
describe('takamolholding_homepage', function()
{
    
   
    it('should launch the url', function ()
    {   
        browser.ignoreSynchronization=true;
        browser.driver.get('http://takamolholding.com/');
        browser.driver.manage().window().maximize();
        element(by.xpath('//*[@id="hero"]/div[1]/ul/li[3]/div/div/div/div[2]/a')).click();
        
      

    });;
    it('should launch the url join takamolholding', function ()
    {   
       browser.ignoreSynchronization=true;
       var elm = element(by.xpath('//*[@id="join_us_row"]/div[4]/div/div[2]/div/div/a'));
        elm.getWebElement().then(function(elm){ return browser.executeScript("(arguments[0]).click();", elm)});
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
       var elm = element(by.xpath('//*[@id="menu-item-6"]/a'));
       elm.getWebElement().then(function(elm){ return browser.executeScript("(arguments[0]).click();", elm)});
       element(by.xpath('//*[@id="post-4"]/div/div/div[1]/div/div[2]/a')).click();
        
 });

    it('should fill the form', function ()
    {  
        browser.ignoreSynchronization=true;
        element(by.xpath('//*[@id="firstname"]')).sendKeys("Damayanti");
        element(by.xpath('//*[@id="lastname"]')).sendKeys("Rathore");
        element(by.xpath('//*[@id="arabicname"]')).sendKeys("دامايانتي");
        element(by.xpath('//*[@id="erp-form"]/div[3]/div[2]/div[2]/label/input')).click();
        element(by.id('marital_status')).sendKeys("Single");
        element(by.id('bday')).sendKeys("02/05/1994");
        element(by.id('email')).sendKeys("damayanti.kanwar@cognizant.com");
        element(by.id('mobile')).sendKeys("7218123456");
        element(by.id('phone')).sendKeys("0141123445");
        element(by.xpath('//*[@id="erp-form"]/div[11]/select')).$('[value="105"]').click();
        element(by.xpath('//*[@id="id_type"]')).sendKeys("National ID");
        element(by.id('id')).sendKeys("75643432");
        element(by.xpath('//*[@id="erp-form"]/div[16]/select')).sendKeys("Master of Science in Construction Project Management.");
        element(by.xpath('//*[@id="erp-form"]/div[17]/select')).sendKeys("Management");
        element(by.xpath('//*[@id="erp-form"]/div[21]/ul/li[2]/label/input')).click();
        element(by.id('expected_salary')).sendKeys("10Lakh");
        browser.sleep(800);
        element(by.xpath('//*[@id="erp-form"]/input[2]')).click();
  
});

    });





//*[@id="erp-form"]/input[2]
