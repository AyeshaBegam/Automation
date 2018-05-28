'use strict';

describe('Login page displayed', function () {

	  

  it('should Login with all credentials', function () {
	  
    var URL = element(by.id('url'));
    var UN = element(by.id('username'));
    var password= element(by.id('password'));
    var clk=element(by.css('[class="login-btn"]'));
   
    password.sendKeys('admsam');
    UN.sendKeys('sam');
    URL.sendKeys('http://pc13098:1156/');
    clk.click();
    browser.sleep(20000);
  });
  
  it('should navigate between the icons', function(){
	var prof= element(by.css('[routerlink="profile"]'));
	prof.click();
	
	var ord= element(by.css('[routerlink="orders"]'));
	ord.click();
	  browser.sleep(2000);
  });

  it('Should select the work order created and assign to operator', function(){
	 
	element(by.css('[class="lt-child"]')).click();
	
    var btn= element(by.buttonText("affecter"));
    browser.sleep(500);
    btn.click();
	   
	element(by.css('[routerlink="orders"]')).click();
    browser.sleep(1500);
  });
  
it('Should supervise the workorder',function(){
	  
	  element(by.css('[class="ft-child lt-child"]')).click();
	  
	  var supbtn = element(by.css('[class="buttonview bg-peacock-blue text-white"]'));
	  
	  browser.sleep(1000);
	  
	 supbtn.click();
	 browser.sleep(1000);
	 
	 });
  
  it('Should logout from the app',function(){
	  var prof= element(by.css('[routerlink="profile"]'));
		prof.click();
      browser.sleep(1000);
      element(by.linkText('seDeconnecter')).click();
		
	  });
  });



