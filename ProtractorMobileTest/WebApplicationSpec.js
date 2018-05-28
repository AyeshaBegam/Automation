'use strict';

describe('Login page displayed', function () {

	  

  it('should Login with all credentials', function () {
	  
	  browser.get('http://pc13098:1154/');
   
    browser.manage().window().maximize();
   
    element(by.id('username')).sendKeys('sam');
    element(by.id('password')).sendKeys('admsam');
    element(by.id('validate')).click();
    //browser.sleep(20000);
     expect(element(by.linkText('Intervention management')).getTagName()).toBe('a');
   
  });
  
  
});