import  { Builder, By, Key, until } from 'selenium-webdriver';
import { smartuiSnapshot } from '@lambdatest/selenium-driver';


let capabilities = {
    platform: "catalina",
    browserName: "chrome",
    version: "latest",
    "LT:Options": {
		"username": "<LT_USERNAME>",
		"accessKey": "<LT_ACCESS_KEY>",
		"project": "<PROJECT_NAME>",
		"w3c": true,
        name: "<TEST_NAME>", // name of the test
        build: "<BUILD_NAME", // name of the build
        visual: true,
    
	},    
  };

(async function example() {
      // Setup Input capabilities
  var gridUrl = "https://" + "<LT_USERNAME>" + ":" + "<LT_ACCESS_KEY>" + "@hub.lambdatest.com/wd/hub";


    let driver = await new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
        driver.manage().window().fullscreen();
    try {
        
        await driver.get('https://www.lambdatest.com/visual-regression-testing')
        await smartuiSnapshot(driver, 'LT-SmartUI');

    } finally {
        await driver.quit();
    }
})();