    'use strict';
    var data=require('../DataFiles/TestData.json');
    var TakamolPage = require('../PageFiles/TakamolPage.js');
      describe('Takamolholdings Suites should test', function()
      {

      var page;
      page = new TakamolPage();

                describe('Takamol Homepage',function()
                {
                                beforeEach(function ()
                                   {
                                    browser.ignoreSynchronization=true;

                                   });
                                it('should launch url', function ()
                                   {
                                       page.call_url();
                                       browser.driver.manage().window().maximize();
                                   });

                                   it('should click on start', function ()
                                   {
                                      page.startbutton.click();

                                   });
                                it('should click Takamol All Menus', function ()
                                   {
                                    browser.sleep(8000);
                                    page.firstmenu.click();
                                    browser.sleep(8000);
                                    page.secondmenu.click();
                                   });
                                   it('should navigate to Takamol Join Page', function ()
                                   {
                                    //var elm = element(by.xpath('//*[@id="join_us_row"]/div[4]/div/div[2]/div/div/a'));
                                       var elm=page.joinnow;
                                       elm.getWebElement().then(function(elm){ return browser.executeScript("(arguments[0]).click();",elm)});
                                       browser.getAllWindowHandles().then(function (handles) {
                                           browser.switchTo().window(handles[1]);
                                       });
                                  });
                });
                describe('Takamol Join Us Page',function()
               {
                                      beforeEach(function ()
                                   {
                                    browser.ignoreSynchronization=true;

                                   });
                                   it('should navigate to Takamol Apply job Form', function ()
                                   {
                                      var elm = page.thirdmenu;
                                      elm.getWebElement().then(function(elm){ return browser.executeScript("(arguments[0]).click();", elm)});
                                      element(by.xpath('//*[@id="post-4"]/div/div/div[1]/div/div[2]/a')).click();

                                    });
                                 it('should fill the form', function ()
                                   {
                                       element(by.xpath('//*[@id="firstname"]')).sendKeys(data.firstname);
                                       element(by.xpath('//*[@id="lastname"]')).sendKeys(data.lastname);
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
      });
