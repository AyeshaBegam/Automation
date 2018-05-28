/*// An example configuration file.
exports.config = {
  //directConnect: true,
    seleniumAddress: 'http://localhost:4723/wd/hub',
  
    specs: ['example_spec.js'],
    // Capabilities to be passed to the webdriver instance.
  capabilities: {
   browserName: 'chrome',
   platformName:'Android',
   deviceName:'',
   Appium-version:'1.4.13.1',
   platformVersion:'6.0.1',
  },
  baseUrl: 'http://127.0.0.1:4723',
  
  framework: 'jasmine',

    jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};*/


exports.config = {
		  
		  seleniumAddress: 'http://127.0.0.1:4727/wd/hub',

		 

		  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
		 
		  capabilities: {
		        browserName: '/',
		        app: 'C:/Software/Appium/android-debug.apk',
		       
		        deviceName: 'FCAZGU019105CT3',
		        platformName: 'Android',
		        platformVersion: '6.0.1',
		        appPackage: 'com.test.ngcordova',
		        appActivity:'com.test.ngcordova.MainActivity',
		        autoWebview : true,
		        autoWebviewTimeout: 10000,
		        autoAcceptAlerts: 'true',
		        specs: ['example_spec.js'],

				  baseUrl: 'http://127.0.0.1:4727' 
		       
		        
		    },
		   
	
		   
		};